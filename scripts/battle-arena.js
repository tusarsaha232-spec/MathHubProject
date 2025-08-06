class MathBattleArena {
    constructor() {
        this.mathTopics = {
            "Class 8": {
                "Rational Numbers": [
                    ["Simplify 1/2 + 1/3", 5/6], 
                    ["Multiply 2/5 by 3/4", 6/20], 
                    ["Evaluate 1/4 - 1/8", 1/8],
                    ["Convert 0.75 to fraction", 3/4],
                    ["Find 3/4 of 16", 12]
                ],
                "Linear Equations in One Variable": [
                    ["Solve: 2x + 5 = 15", 5], 
                    ["Solve: 3(x - 2) = 9", 5], 
                    ["Solve: 4x - 7 = 13", 5],
                    ["Solve: x/2 + 3 = 8", 10],
                    ["Solve: 5 - 2x = 1", 2]
                ],
                "Understanding Quadrilaterals": [
                    ["If a square has a side of 5, what is its perimeter?", 20], 
                    ["A rectangle has length 8, width 3. What is its area?", 24],
                    ["Sum of interior angles of a quadrilateral", 360],
                    ["Number of sides in a parallelogram", 4]
                ],
                "Practical Geometry": [
                    ["A circle has radius 7. What is its circumference (approx)? (Use 22/7)", 44], 
                    ["A triangle has base 10, height 5. What is its area?", 25],
                    ["Area of a rectangle with length 6, width 4", 24]
                ],
                "Data Handling": [
                    ["Average of 10, 20, 30", 20], 
                    ["Median of 5, 2, 8, 1, 9", 5],
                    ["Mode of 2, 3, 3, 4, 5", 3],
                    ["Range of 10, 5, 15, 8, 12", 10]
                ]
            },
            "Class 9": {
                "Number Systems": [
                    ["Rationalize 1/sqrt(2) (approx to 2 decimal places)", 0.71], 
                    ["What is 0.333... as a fraction?", "1/3"], 
                    ["Evaluate sqrt(25)", 5],
                    ["Is sqrt(2) rational or irrational?", "irrational"],
                    ["Convert 2.5 to a fraction", "5/2"]
                ],
                "Polynomials": [
                    ["Find value of x^2 + 2x + 1 for x=2", 9], 
                    ["Degree of 3x^4 + 2x + 1", 4], 
                    ["Roots of x^2 - 1", "1, -1"],
                    ["Coefficient of x^2 in 2x^3 + 3x^2 + 1", 3],
                    ["Is x + 5 a polynomial?", "True"]
                ],
                "Coordinate Geometry": [
                    ["Distance between (0,0) and (3,4)", 5], 
                    ["Midpoint of (1,1) and (3,5)", "2,3"], 
                    ["What is the x-coordinate of the point (5, -2)?", 5],
                    ["In which quadrant is (-2, 3)?", "II"],
                    ["Origin coordinates", "0,0"]
                ]
            },
            "Class 10": {
                "Real Numbers": [
                    ["LCM of 12 and 18", 36], 
                    ["HCF of 24 and 36", 12], 
                    ["What is the square root of 81?", 9],
                    ["Is 0 a rational number?", "True"],
                    ["Prime factorization of 60", "2^2 × 3 × 5"]
                ],
                "Polynomials": [
                    ["Roots of x^2 - 4", "2, -2"], 
                    ["Sum of roots of x^2 + 5x + 6", -5], 
                    ["Find the product of roots of x^2 - 3x + 2", 2],
                    ["Degree of zero polynomial", "undefined"],
                    ["Leading coefficient of 3x^2 + 2x + 1", 3]
                ],
                "Quadratic Equations": [
                    ["Discriminant of x^2 + 2x + 1", 0], 
                    ["Nature of roots of x^2 - 4x + 4 = 0", "Real and Equal"],
                    ["Solve: x^2 - 5x + 6 = 0 (smaller root)", 2],
                    ["Sum of roots of ax^2 + bx + c = 0", "-b/a"]
                ]
            },
            "Class 11": {
                "Sets": [
                    ["Number of subsets of {1,2,3}", 8], 
                    ["Intersection of {1,2,3} and {2,3,4}", "2,3"], 
                    ["Union of {1,2} and {3,4}", "1,2,3,4"],
                    ["Empty set symbol", "∅"],
                    ["Is {1,2} subset of {1,2,3}?", "True"]
                ],
                "Relations and Functions": [
                    ["Domain of f(x) = 1/x", "All real numbers except 0"], 
                    ["Range of f(x) = x^2", "All non-negative real numbers"],
                    ["Is f(x) = x a function?", "True"],
                    ["f(x) = 2x + 1, find f(3)", 7]
                ],
                "Trigonometric Functions": [
                    ["Value of sin(90°)", 1], 
                    ["Value of cos(180°)", -1], 
                    ["Value of tan(45°)", 1],
                    ["sin^2(x) + cos^2(x) = ?", 1],
                    ["Value of sin(30°)", 0.5]
                ]
            },
            "Class 12": {
                "Relations and Functions": [
                    ["Is f(x)=x^2 one-to-one?", "False"], 
                    ["Is f(x)=x^3 onto?", "True"],
                    ["Inverse of f(x) = 2x", "x/2"],
                    ["Domain of f(x) = sqrt(x)", "x ≥ 0"]
                ],
                "Matrices": [
                    ["Order of a 2x3 matrix", "2x3"], 
                    ["Transpose of [[1,2],[3,4]]", "[[1,3],[2,4]]"],
                    ["Determinant of 2x2 identity matrix", 1],
                    ["Trace of [[2,1],[3,4]]", 6]
                ],
                "Integrals": [
                    ["Integral of x dx", "x^2/2 + C"], 
                    ["Integral of 1/x dx", "ln|x| + C"],
                    ["Integral of sin(x) dx", "-cos(x) + C"],
                    ["Integral of e^x dx", "e^x + C"]
                ]
            },
            "Engineering Mathematics 1": {
                "Differential Calculus": [
                    ["Derivative of sin(x)", "cos(x)"], 
                    ["Derivative of e^x", "e^x"],
                    ["Derivative of x^2", "2x"],
                    ["Derivative of ln(x)", "1/x"],
                    ["Second derivative of x^3", "6x"]
                ],
                "Integral Calculus": [
                    ["Integral of cos(x) dx", "sin(x) + C"], 
                    ["Integral of x^2 dx", "x^3/3 + C"],
                    ["Integral of 1 dx", "x + C"],
                    ["Integral of x^n dx", "x^(n+1)/(n+1) + C"]
                ]
            },
            "Engineering Mathematics 2": {
                "Ordinary Differential Equations": [
                    ["Order of dy/dx + y = x", 1], 
                    ["Solution of dy/dx = y", "y = Ce^x"],
                    ["Degree of (d^2y/dx^2)^2 + y = 0", 2],
                    ["Is dy/dx = x linear?", "True"]
                ],
                "Laplace Transforms": [
                    ["Laplace transform of 1", "1/s"], 
                    ["Laplace transform of t", "1/s^2"],
                    ["Laplace transform of e^at", "1/(s-a)"],
                    ["Laplace transform of sin(at)", "a/(s^2+a^2)"]
                ]
            },
            "Advanced Engineering Mathematics": {
                "Numerical Methods": [
                    ["Newton-Raphson method finds what?", "roots"], 
                    ["Bisection method is used for?", "root finding"],
                    ["Trapezoidal rule is used for?", "integration"],
                    ["Simpson's rule order of accuracy", 4]
                ],
                "Complex Analysis": [
                    ["Modulus of 3+4i", 5], 
                    ["Argument of 1+i (degrees)", 45],
                    ["Real part of 2+3i", 2],
                    ["Imaginary part of 5-2i", -2]
                ]
            }
        };

        this.currentQuestion = null;
        this.currentAnswer = null;
        this.startTime = null;
        this.timer = null;
        this.timerSeconds = 0;
        
        // Performance tracking
        this.stats = this.loadStats();
        this.achievements = this.loadAchievements();
        
        this.initializeElements();
        this.bindEvents();
        this.populateChapters();
        this.updateDisplay();
    }
    
    initializeElements() {
        this.classSelect = document.getElementById('class-select');
        this.chapterSelect = document.getElementById('chapter-select');
        this.difficultySelect = document.getElementById('difficulty-select');
        this.getQuestionBtn = document.getElementById('get-question-btn');
        this.questionText = document.getElementById('question-text');
        this.answerForm = document.getElementById('answer-form');
        this.userAnswerInput = document.getElementById('user-answer');
        this.resultMessage = document.getElementById('result-message');
        this.timerDisplay = document.getElementById('timer-display');
        
        // Stats elements
        this.totalScoreSpan = document.getElementById('total-score');
        this.currentStreakSpan = document.getElementById('current-streak');
        this.accuracyRateSpan = document.getElementById('accuracy-rate');
        this.questionsAnsweredSpan = document.getElementById('questions-answered');
        this.achievementsList = document.getElementById('achievements-list');
        this.leaderboardContent = document.getElementById('leaderboard-content');
    }
    
    bindEvents() {
        this.classSelect.addEventListener('change', () => this.populateChapters());
        this.getQuestionBtn.addEventListener('click', () => this.generateQuestion());
        this.answerForm.addEventListener('submit', (e) => this.submitAnswer(e));
        
        this.userAnswerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.submitAnswer(e);
            }
        });
    }
    
    populateChapters() {
        const selectedClass = this.classSelect.value;
        const chapters = this.mathTopics[selectedClass];
        
        this.chapterSelect.innerHTML = '';
        
        if (chapters) {
            Object.keys(chapters).forEach(chapter => {
                const option = document.createElement('option');
                option.value = chapter;
                option.textContent = chapter;
                this.chapterSelect.appendChild(option);
            });
        }
    }
    
    generateQuestion() {
        const classLevel = this.classSelect.value;
        const chapter = this.chapterSelect.value;
        const difficulty = this.difficultySelect.value;
        
        const chapterQuestions = this.mathTopics[classLevel]?.[chapter];
        
        if (!chapterQuestions || chapterQuestions.length === 0) {
            this.showError('No questions available for this selection');
            return;
        }
        
        // Select random question
        const randomIndex = Math.floor(Math.random() * chapterQuestions.length);
        const questionData = chapterQuestions[randomIndex];
        
        this.currentQuestion = {
            text: questionData[0],
            answer: questionData[1],
            classLevel,
            chapter,
            difficulty
        };
        
        this.displayQuestion();
        this.startTimer();
        this.userAnswerInput.focus();
    }
    
    displayQuestion() {
        this.questionText.textContent = this.currentQuestion.text;
        this.userAnswerInput.value = '';
        this.resultMessage.textContent = '';
        this.resultMessage.className = 'result-message';
    }
    
    startTimer() {
        this.startTime = Date.now();
        this.timerSeconds = 0;
        this.updateTimer();
        
        if (this.timer) clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.timerSeconds++;
            this.updateTimer();
        }, 1000);
    }
    
    updateTimer() {
        const minutes = Math.floor(this.timerSeconds / 60);
        const seconds = this.timerSeconds % 60;
        this.timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    submitAnswer(e) {
        e.preventDefault();
        
        if (!this.currentQuestion) {
            this.showError('Please generate a question first');
            return;
        }
        
        const userAnswer = this.userAnswerInput.value.trim();
        const responseTime = (Date.now() - this.startTime) / 1000;
        
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        
        const isCorrect = this.checkAnswer(userAnswer, this.currentQuestion.answer);
        this.displayResult(isCorrect, this.currentQuestion.answer);
        this.updateStats(isCorrect, responseTime);
        this.checkAchievements();
        this.updateDisplay();
    }
    
    checkAnswer(userAnswer, correctAnswer) {
        if (!userAnswer) return false;
        
        // Normalize answers for comparison
        const normalizeAnswer = (answer) => {
            return String(answer)
                .toLowerCase()
                .replace(/\s+/g, '')
                .replace(/[,]/g, '');
        };
        
        const normalizedUser = normalizeAnswer(userAnswer);
        const normalizedCorrect = normalizeAnswer(correctAnswer);
        
        // Check exact match
        if (normalizedUser === normalizedCorrect) return true;
        
        // Check numerical equivalence for fractions and decimals
        if (this.isNumericallyEquivalent(normalizedUser, normalizedCorrect)) {
            return true;
        }
        
        return false;
    }
    
    isNumericallyEquivalent(answer1, answer2) {
        try {
            const num1 = this.evaluateExpression(answer1);
            const num2 = this.evaluateExpression(answer2);
            
            if (typeof num1 === 'number' && typeof num2 === 'number') {
                return Math.abs(num1 - num2) < 0.001; // Small tolerance for floating point
            }
        } catch (e) {
            // If evaluation fails, not numerically equivalent
        }
        return false;
    }
    
    evaluateExpression(expr) {
        // Safe evaluation for simple mathematical expressions
        try {
            // Replace common fraction notation
            expr = expr.replace(/(\d+)\/(\d+)/g, '$1/$2');
            
            // Allow only safe mathematical expressions
            if (!/^[0-9+\-*/().\/\s]+$/.test(expr)) {
                return NaN;
            }
            
            return new Function('return ' + expr)();
        } catch (e) {
            return NaN;
        }
    }
    
    displayResult(isCorrect, correctAnswer) {
        if (isCorrect) {
            this.resultMessage.textContent = '🎉 Correct! Well done!';
            this.resultMessage.className = 'result-message correct';
        } else {
            this.resultMessage.textContent = `❌ Incorrect. The correct answer was: ${correctAnswer}`;
            this.resultMessage.className = 'result-message incorrect';
        }
    }
    
    updateStats(isCorrect, responseTime) {
        this.stats.questionsAnswered++;
        this.stats.totalTime += responseTime;
        
        if (isCorrect) {
            this.stats.correctAnswers++;
            this.stats.currentStreak++;
            this.stats.score += this.calculateScore(responseTime);
            
            // Update best streak
            if (this.stats.currentStreak > this.stats.bestStreak) {
                this.stats.bestStreak = this.stats.currentStreak;
            }
        } else {
            this.stats.currentStreak = 0;
        }
        
        // Calculate accuracy
        this.stats.accuracy = (this.stats.correctAnswers / this.stats.questionsAnswered) * 100;
        
        // Track performance by subject
        const subject = `${this.currentQuestion.classLevel} - ${this.currentQuestion.chapter}`;
        if (!this.stats.subjectPerformance[subject]) {
            this.stats.subjectPerformance[subject] = { correct: 0, total: 0 };
        }
        
        this.stats.subjectPerformance[subject].total++;
        if (isCorrect) {
            this.stats.subjectPerformance[subject].correct++;
        }
        
        this.saveStats();
    }
    
    calculateScore(responseTime) {
        // Base score of 10, with time bonus
        let score = 10;
        
        // Bonus for quick answers (under 10 seconds)
        if (responseTime < 10) {
            score += Math.floor((10 - responseTime) * 2);
        }
        
        // Streak multiplier
        if (this.stats.currentStreak > 1) {
            score += Math.min(this.stats.currentStreak - 1, 5);
        }
        
        return Math.max(score, 1); // Minimum 1 point
    }
    
    checkAchievements() {
        const newAchievements = [];
        
        // First correct answer
        if (this.stats.correctAnswers === 1 && !this.achievements.includes('first_correct')) {
            newAchievements.push({
                id: 'first_correct',
                title: 'First Victory',
                description: 'Got your first answer correct!'
            });
        }
        
        // 10 questions answered
        if (this.stats.questionsAnswered === 10 && !this.achievements.includes('ten_questions')) {
            newAchievements.push({
                id: 'ten_questions',
                title: 'Getting Started',
                description: 'Answered 10 questions'
            });
        }
        
        // 5-question streak
        if (this.stats.currentStreak === 5 && !this.achievements.includes('streak_5')) {
            newAchievements.push({
                id: 'streak_5',
                title: 'Hot Streak',
                description: 'Got 5 questions correct in a row!'
            });
        }
        
        // 10-question streak
        if (this.stats.currentStreak === 10 && !this.achievements.includes('streak_10')) {
            newAchievements.push({
                id: 'streak_10',
                title: 'Math Master',
                description: 'Got 10 questions correct in a row!'
            });
        }
        
        // 90% accuracy with at least 20 questions
        if (this.stats.accuracy >= 90 && this.stats.questionsAnswered >= 20 && !this.achievements.includes('accuracy_90')) {
            newAchievements.push({
                id: 'accuracy_90',
                title: 'Precision Expert',
                description: 'Achieved 90% accuracy!'
            });
        }
        
        // Score milestones
        if (this.stats.score >= 100 && !this.achievements.includes('score_100')) {
            newAchievements.push({
                id: 'score_100',
                title: 'Century',
                description: 'Reached 100 points!'
            });
        }
        
        if (this.stats.score >= 500 && !this.achievements.includes('score_500')) {
            newAchievements.push({
                id: 'score_500',
                title: 'High Achiever',
                description: 'Reached 500 points!'
            });
        }
        
        // Add new achievements
        newAchievements.forEach(achievement => {
            this.achievements.push(achievement.id);
            this.showAchievement(achievement);
        });
        
        if (newAchievements.length > 0) {
            this.saveAchievements();
        }
    }
    
    showAchievement(achievement) {
        // Create a temporary achievement notification
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div class="achievement-icon">🏆</div>
            <div class="achievement-details">
                <strong>${achievement.title}</strong><br>
                ${achievement.description}
            </div>
        `;
        
        // Add to achievements list
        const achievementItem = document.createElement('div');
        achievementItem.className = 'achievement-item';
        achievementItem.innerHTML = `
            <div class="achievement-icon">🏆</div>
            <div class="achievement-text">
                <strong>${achievement.title}</strong><br>
                ${achievement.description}
            </div>
        `;
        
        // Remove placeholder if it exists
        const placeholder = this.achievementsList.querySelector('.placeholder');
        if (placeholder) {
            placeholder.remove();
        }
        
        this.achievementsList.insertBefore(achievementItem, this.achievementsList.firstChild);
    }
    
    updateDisplay() {
        // Update stats display
        this.totalScoreSpan.textContent = this.stats.score;
        this.currentStreakSpan.textContent = this.stats.currentStreak;
        this.accuracyRateSpan.textContent = Math.round(this.stats.accuracy) + '%';
        this.questionsAnsweredSpan.textContent = this.stats.questionsAnswered;
        
        // Update leaderboard with personal bests
        this.updateLeaderboard();
    }
    
    updateLeaderboard() {
        const records = [
            { label: 'Best Streak', value: this.stats.bestStreak, unit: 'questions' },
            { label: 'Highest Score', value: this.stats.score, unit: 'points' },
            { label: 'Best Accuracy', value: Math.round(this.stats.accuracy), unit: '%' },
            { label: 'Total Questions', value: this.stats.questionsAnswered, unit: 'answered' }
        ];
        
        if (records.some(record => record.value > 0)) {
            const leaderboardHTML = records.map((record, index) => `
                <div class="leaderboard-item">
                    <div class="leaderboard-rank">#${index + 1}</div>
                    <div class="leaderboard-details">
                        <div class="leaderboard-score">${record.value} ${record.unit}</div>
                        <div class="leaderboard-meta">${record.label}</div>
                    </div>
                </div>
            `).join('');
            
            this.leaderboardContent.innerHTML = leaderboardHTML;
        }
    }
    
    showError(message) {
        this.resultMessage.textContent = message;
        this.resultMessage.className = 'result-message incorrect';
    }
    
    // Data persistence methods
    loadStats() {
        const defaultStats = {
            score: 0,
            questionsAnswered: 0,
            correctAnswers: 0,
            currentStreak: 0,
            bestStreak: 0,
            accuracy: 0,
            totalTime: 0,
            subjectPerformance: {}
        };
        
        const saved = localStorage.getItem('math_battle_stats');
        return saved ? { ...defaultStats, ...JSON.parse(saved) } : defaultStats;
    }
    
    saveStats() {
        localStorage.setItem('math_battle_stats', JSON.stringify(this.stats));
    }
    
    loadAchievements() {
        const saved = localStorage.getItem('math_battle_achievements');
        return saved ? JSON.parse(saved) : [];
    }
    
    saveAchievements() {
        localStorage.setItem('math_battle_achievements', JSON.stringify(this.achievements));
    }
}

// Initialize the battle arena when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new MathBattleArena();
});