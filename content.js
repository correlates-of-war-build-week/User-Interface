

class Article {
    constructor(domElement) {
      this.domElement = domElement;
      console.log("this.domElement", this.domElement)
      this.expandButton = domElement.querySelector('.expandButton'); 
      this.expandButton.textContent = 'Read More'
      this.expandButton.addEventListener('click', () => this.expandArticle());
    }
  
    expandArticle() {
      this.domElement.classList.toggle('article-open')
      console.log(this.domElement)
      let hiddenP = this.domElement.querySelectorAll('p')
      console.log('hiddenP', hiddenP)
      hiddenP.forEach(function(p) {
          p.classList.toggle('hidden')
      })
    }
  }
  
  let articles = document.querySelectorAll('.article')
  console.log(articles)
  articles.forEach(article => new Article(article));
  