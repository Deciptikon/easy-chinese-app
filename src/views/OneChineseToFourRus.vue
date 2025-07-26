<template>
  <div class="game-container" tabindex="0" @keydown="handleKeyDown" ref="gameContainer">
    <h1>Учим китайские иероглифы</h1>

    <!-- Текущий иероглиф -->
    <div class="character-display">
      <div class="character">{{ currentCharacter.char }}</div>
      <div class="pinyin">{{ currentCharacter.pinyin }}</div>
    </div>

    <!-- Варианты ответов -->
    <div class="options">
      <button
        v-for="(option, index) in options"
        :key="index"
        @click="checkAnswer(option)"
        class="option-btn"
        :class="{
          correct: selectedAnswer === option && option === currentCharacter.meaning,
          incorrect: selectedAnswer === option && option !== currentCharacter.meaning,
          revealed: selectedAnswer && option === currentCharacter.meaning,
        }"
        :disabled="selectedAnswer !== null"
        ref="optionButtons"
      >
        {{ index + 1 }}. {{ option }}
      </button>
    </div>

    <!-- Счетчики -->
    <div class="score">
      <div>Правильно: {{ correctAnswers }}</div>
      <div>Неправильно: {{ wrongAnswers }}</div>
      <div>Процент правильных: {{ accuracy }}%</div>
    </div>

    <!-- Кнопка следующего вопроса -->
    <button v-if="selectedAnswer" @click="loadNewQuestion" class="next-btn" ref="nextButton">
      Следующий вопрос (+)
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characters: [
        { char: '人', meaning: 'человек', pinyin: 'rén' },
        { char: '水', meaning: 'вода', pinyin: 'shuǐ' },
        { char: '火', meaning: 'огонь', pinyin: 'huǒ' },
        { char: '山', meaning: 'гора', pinyin: 'shān' },
        { char: '木', meaning: 'дерево', pinyin: 'mù' },
      ],
      currentCharacter: {},
      options: [],
      correctAnswers: 0,
      wrongAnswers: 0,
      selectedAnswer: null,
    }
  },
  computed: {
    accuracy() {
      const total = this.correctAnswers + this.wrongAnswers
      return total > 0 ? Math.round((this.correctAnswers / total) * 100) : 0
    },
  },
  mounted() {
    this.loadNewQuestion()
    this.$refs.gameContainer.focus() // Фокусируем контейнер для обработки клавиш
  },
  methods: {
    loadNewQuestion() {
      this.selectedAnswer = null
      this.currentCharacter = this.characters[Math.floor(Math.random() * this.characters.length)]

      const allMeanings = this.characters.map((c) => c.meaning)
      const wrongOptions = allMeanings
        .filter((m) => m !== this.currentCharacter.meaning)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)

      this.options = [...wrongOptions, this.currentCharacter.meaning].sort(
        () => Math.random() - 0.5,
      )

      // Возвращаем фокус на контейнер после загрузки нового вопроса
      this.$nextTick(() => {
        this.$refs.gameContainer.focus()
      })
    },
    checkAnswer(selectedAnswer) {
      this.selectedAnswer = selectedAnswer
      if (selectedAnswer === this.currentCharacter.meaning) {
        this.correctAnswers++
      } else {
        this.wrongAnswers++
      }
    },
    handleKeyDown(event) {
      // Если ответ уже выбран, обрабатываем только "+"
      if (this.selectedAnswer !== null) {
        if (event.key === '+' || event.key === '=') {
          this.loadNewQuestion()
        }
        return
      }

      // Обработка цифр 1-4
      if (event.key >= '1' && event.key <= '4') {
        const index = parseInt(event.key) - 1
        if (index < this.options.length) {
          this.checkAnswer(this.options[index])
        }
      }
    },
  },
}
</script>

<style scoped>
.game-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  outline: none; /* Убираем стандартный outline при фокусе */
}

.game-container:focus {
  box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.5);
  border-radius: 8px;
}

.character-display {
  margin: 30px 0;
}

.character {
  font-size: 72px;
  line-height: 1;
  margin-bottom: 10px;
}

.pinyin {
  font-size: 24px;
  color: #666;
}

.options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 30px 0;
}

.option-btn {
  padding: 15px;
  font-size: 18px;
  background: #f0f0f0;
  border: 2px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
}

.option-btn:hover:not(:disabled) {
  background: #e0e0e0;
}

.option-btn:disabled {
  cursor: not-allowed;
}

.correct {
  background-color: #4caf50 !important;
  color: white;
}

.incorrect {
  background-color: #f44336 !important;
  color: white;
}

.revealed {
  background-color: #4caf50 !important;
  color: white;
  animation: pulse 0.5s;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.score {
  margin-top: 30px;
  padding: 15px;
  background: #513838;
  border-radius: 8px;
}

.next-btn {
  margin-top: 20px;
  padding: 12px 24px;
  background: #2196f3;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

.next-btn:hover {
  background: #0b7dda;
}

/* Подсказка по управлению */
.key-hint {
  margin-top: 20px;
  font-size: 14px;
  color: #666;
}
</style>
