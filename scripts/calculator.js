class AdvancedCalculator {
    constructor() {
        this.history = this.loadHistory();
        this.initializeElements();
        this.bindEvents();
        this.displayHistory();
    }
    
    initializeElements() {
        this.expressionInput = document.getElementById('expression');
        this.calculateBtn = document.getElementById('calculate-btn');
        this.clearBtn = document.getElementById('clear-btn');
        this.resultOutput = document.getElementById('result-output');
        this.explanationOutput = document.getElementById('explanation-output');
        this.historyList = document.getElementById('history-list');
        this.clearHistoryBtn = document.getElementById('clear-history');
        this.functionButtons = document.querySelectorAll('.function-btn');
    }
    
    bindEvents() {
        this.calculateBtn.addEventListener('click', () => this.calculate());
        this.clearBtn.addEventListener('click', () => this.clear());
        this.clearHistoryBtn.addEventListener('click', () => this.clearHistory());
        
        this.expressionInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.calculate();
        });
        
        this.functionButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.insertFunction(e.target.dataset.func);
            });
        });
    }
    
    insertFunction(func) {
        const cursorPosition = this.expressionInput.selectionStart;
        const currentValue = this.expressionInput.value;
        const newValue = currentValue.substring(0, cursorPosition) + func + currentValue.substring(cursorPosition);
        this.expressionInput.value = newValue;
        this.expressionInput.focus();
        
        // Position cursor after the inserted function
        const newCursorPosition = cursorPosition + func.length;
        this.expressionInput.setSelectionRange(newCursorPosition, newCursorPosition);
    }
    
    calculate() {
        const expression = this.expressionInput.value.trim();
        if (!expression) {
            this.showError('Please enter an expression');
            return;
        }
        
        try {
            const result = this.evaluateExpression(expression);
            const explanation = this.generateExplanation(expression, result);
            
            this.displayResult(result);
            this.displayExplanation(explanation);
            this.addToHistory(expression, result);
        } catch (error) {
            this.showError(error.message);
        }
    }
    
    evaluateExpression(expression) {
        // Handle different types of mathematical expressions
        const cleanExpr = this.preprocessExpression(expression);
        
        // Check for equation solving (contains =)
        if (cleanExpr.includes('=')) {
            return this.solveEquation(cleanExpr);
        }
        
        // Check for calculus operations
        if (this.isCalculusExpression(cleanExpr)) {
            return this.evaluateCalculus(cleanExpr);
        }
        
        // Check for special functions
        if (this.hasSpecialFunctions(cleanExpr)) {
            return this.evaluateSpecialFunctions(cleanExpr);
        }
        
        // Basic arithmetic evaluation
        return this.evaluateArithmetic(cleanExpr);
    }
    
    preprocessExpression(expression) {
        return expression
            .toLowerCase()
            .replace(/\s+/g, '')
            .replace(/π/g, Math.PI.toString())
            .replace(/e(?!\d)/g, Math.E.toString())
            .replace(/sin/g, 'Math.sin')
            .replace(/cos/g, 'Math.cos')
            .replace(/tan/g, 'Math.tan')
            .replace(/log/g, 'Math.log10')
            .replace(/ln/g, 'Math.log')
            .replace(/sqrt/g, 'Math.sqrt')
            .replace(/\^/g, '**');
    }
    
    isCalculusExpression(expression) {
        return expression.includes('derivative') || expression.includes('integral') || 
               expression.includes('d/dx') || expression.includes('∫');
    }
    
    hasSpecialFunctions(expression) {
        return /Math\.(sin|cos|tan|log|sqrt)/.test(expression);
    }
    
    solveEquation(expression) {
        const parts = expression.split('=');
        if (parts.length !== 2) {
            throw new Error('Invalid equation format');
        }
        
        const leftSide = parts[0].trim();
        const rightSide = parts[1].trim();
        
        // Simple linear equation solver (ax + b = c)
        if (leftSide.includes('x') && !rightSide.includes('x')) {
            return this.solveLinearEquation(leftSide, rightSide);
        }
        
        throw new Error('Complex equations not yet supported. Try simpler linear equations.');
    }
    
    solveLinearEquation(leftSide, rightSide) {
        // Parse expressions like "2x + 3", "3(x - 2)", etc.
        const rightValue = this.evaluateArithmetic(rightSide);
        
        // Simple pattern matching for linear equations
        const patterns = [
            { regex: /^([+-]?\d*)\s*\*?\s*x\s*([+-]\s*\d+)?$/, type: 'ax+b' },
            { regex: /^([+-]?\d+)\s*\*?\s*\(\s*x\s*([+-]\s*\d+)\s*\)$/, type: 'a(x+b)' }
        ];
        
        for (const pattern of patterns) {
            const match = leftSide.match(pattern.regex);
            if (match) {
                return this.solveLinearPattern(match, pattern.type, rightValue);
            }
        }
        
        throw new Error('Unable to parse this linear equation format');
    }
    
    solveLinearPattern(match, type, rightValue) {
        if (type === 'ax+b') {
            const a = match[1] ? parseFloat(match[1]) || 1 : 1;
            const b = match[2] ? parseFloat(match[2].replace(/\s/g, '')) : 0;
            return (rightValue - b) / a;
        } else if (type === 'a(x+b)') {
            const a = parseFloat(match[1]);
            const b = match[2] ? parseFloat(match[2].replace(/\s/g, '')) : 0;
            return (rightValue / a) - b;
        }
        
        throw new Error('Unknown equation pattern');
    }
    
    evaluateCalculus(expression) {
        if (expression.includes('derivative')) {
            return this.calculateDerivative(expression);
        } else if (expression.includes('integral')) {
            return this.calculateIntegral(expression);
        }
        
        throw new Error('Calculus operation not recognized');
    }
    
    calculateDerivative(expression) {
        // Simple derivative rules for common functions
        const functionMatch = expression.match(/derivative\s+of\s+(.+)/);
        if (!functionMatch) {
            throw new Error('Invalid derivative format. Use: derivative of x^2');
        }
        
        const func = functionMatch[1];
        
        // Basic derivative rules
        if (func === 'x') return '1';
        if (func.match(/^x\^(\d+)$/)) {
            const power = parseInt(func.match(/^x\^(\d+)$/)[1]);
            if (power === 2) return '2x';
            return `${power}x^${power - 1}`;
        }
        if (func === 'sin(x)') return 'cos(x)';
        if (func === 'cos(x)') return '-sin(x)';
        if (func === 'e^x') return 'e^x';
        if (func === 'ln(x)') return '1/x';
        
        throw new Error('Derivative of this function not supported');
    }
    
    calculateIntegral(expression) {
        // Simple integral rules for common functions
        const functionMatch = expression.match(/integral\s+of\s+(.+)/);
        if (!functionMatch) {
            throw new Error('Invalid integral format. Use: integral of 2x');
        }
        
        const func = functionMatch[1];
        
        // Basic integral rules
        if (func === '1') return 'x + C';
        if (func === 'x') return 'x²/2 + C';
        if (func.match(/^(\d+)x$/)) {
            const coeff = parseInt(func.match(/^(\d+)x$/)[1]);
            return `${coeff}x²/2 + C`;
        }
        if (func === 'sin(x)') return '-cos(x) + C';
        if (func === 'cos(x)') return 'sin(x) + C';
        
        throw new Error('Integral of this function not supported');
    }
    
    evaluateSpecialFunctions(expression) {
        // Handle trigonometric functions in degrees
        const degreePattern = /Math\.(sin|cos|tan)\((\d+)\)/g;
        expression = expression.replace(degreePattern, (match, func, degrees) => {
            const radians = (parseFloat(degrees) * Math.PI) / 180;
            return `Math.${func}(${radians})`;
        });
        
        return this.evaluateArithmetic(expression);
    }
    
    evaluateArithmetic(expression) {
        // Safe evaluation of mathematical expressions
        const allowedChars = /^[0-9+\-*/.()Math\s,\^]*$/;
        if (!allowedChars.test(expression)) {
            throw new Error('Invalid characters in expression');
        }
        
        // Replace ^ with ** for exponentiation
        expression = expression.replace(/\^/g, '**');
        
        try {
            // Use Function constructor for safer evaluation than eval
            const result = new Function('return ' + expression)();
            
            if (typeof result !== 'number' || isNaN(result)) {
                throw new Error('Result is not a valid number');
            }
            
            return result;
        } catch (error) {
            throw new Error('Invalid mathematical expression');
        }
    }
    
    generateExplanation(expression, result) {
        const explanations = [];
        
        if (expression.includes('=')) {
            explanations.push('This is an equation solving problem');
            explanations.push('We need to isolate the variable x');
            explanations.push('Applied algebraic operations to both sides');
            explanations.push(`Final answer: x = ${result}`);
        } else if (this.isCalculusExpression(expression)) {
            if (expression.includes('derivative')) {
                explanations.push('This is a differentiation problem');
                explanations.push('Applied the power rule and chain rule');
                explanations.push('Simplified the result');
            } else if (expression.includes('integral')) {
                explanations.push('This is an integration problem');
                explanations.push('Applied the power rule for integration');
                explanations.push('Added the constant of integration');
            }
        } else {
            explanations.push('This is a basic arithmetic calculation');
            explanations.push('Followed the order of operations (PEMDAS)');
            explanations.push('Calculated step by step');
            explanations.push(`Final result: ${this.formatResult(result)}`);
        }
        
        return explanations;
    }
    
    formatResult(result) {
        if (typeof result === 'string') return result;
        if (Number.isInteger(result)) return result.toString();
        return parseFloat(result.toFixed(8)).toString();
    }
    
    displayResult(result) {
        const formattedResult = this.formatResult(result);
        
        this.resultOutput.innerHTML = `
            <div class="result-value">${formattedResult}</div>
            <div class="result-type">${this.getResultType(result)}</div>
        `;
    }
    
    getResultType(result) {
        if (typeof result === 'string') return 'Expression';
        if (Number.isInteger(result)) return 'Integer';
        return 'Decimal';
    }
    
    displayExplanation(explanations) {
        const explanationHTML = `
            <ol class="explanation-steps">
                ${explanations.map(step => `<li>${step}</li>`).join('')}
            </ol>
        `;
        
        this.explanationOutput.innerHTML = explanationHTML;
    }
    
    addToHistory(expression, result) {
        const historyItem = {
            expression,
            result: this.formatResult(result),
            timestamp: new Date().toLocaleString()
        };
        
        this.history.unshift(historyItem);
        if (this.history.length > 50) {
            this.history = this.history.slice(0, 50);
        }
        
        this.saveHistory();
        this.displayHistory();
    }
    
    displayHistory() {
        if (this.history.length === 0) {
            this.historyList.innerHTML = '<p class="placeholder">No calculations yet</p>';
            return;
        }
        
        const historyHTML = this.history.map(item => `
            <div class="history-item">
                <div class="history-expression">${item.expression}</div>
                <div class="history-result">${item.result}</div>
                <div class="history-timestamp">${item.timestamp}</div>
            </div>
        `).join('');
        
        this.historyList.innerHTML = historyHTML;
    }
    
    clear() {
        this.expressionInput.value = '';
        this.resultOutput.innerHTML = '<p class="placeholder">Enter an expression and click Calculate</p>';
        this.explanationOutput.innerHTML = '<p class="placeholder">Detailed explanations will appear here</p>';
        this.expressionInput.focus();
    }
    
    clearHistory() {
        this.history = [];
        this.saveHistory();
        this.displayHistory();
    }
    
    showError(message) {
        this.resultOutput.innerHTML = `
            <div class="error-message">
                <strong>Error:</strong> ${message}
            </div>
        `;
        this.explanationOutput.innerHTML = '<p class="placeholder">Fix the error to see explanations</p>';
    }
    
    saveHistory() {
        localStorage.setItem('calculator_history', JSON.stringify(this.history));
    }
    
    loadHistory() {
        const saved = localStorage.getItem('calculator_history');
        return saved ? JSON.parse(saved) : [];
    }
}

// Initialize the calculator when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new AdvancedCalculator();
});