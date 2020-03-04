export const countLengthComputed = {
    computed: {
        countLengthComputed() {
          return `${this.greeting} (${this.greeting.length})`;
        },
      }
}