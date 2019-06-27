class TabLink {
    constructor(tabElement) {
      this.tabElement = tabElement;
      this.tabData = tabElement.dataset.tab;
  

      if (this.tabData == "all") {
        this.person = document.querySelectorAll(".person");
      } else {
        this.person = document.querySelectorAll(`.person[data-tab='${this.tabData}']`);
      }
  
      this.person = Array.from(this.person).map((person) => {
        return new PersonBio(person)
      });
  
      this.tabElement.addEventListener("click", () => this.selectTab());
    }
  
    selectTab() {
  
      const tabs = document.querySelectorAll('.tab');
  
      tabs.forEach((tabElement) => {
        tabElement.classList.remove("active-tab")
      });
  
      const person = document.querySelectorAll(".person");
  
      person.forEach((person) => {
        person.style.display = "none";
      })

      this.tabElement.classList.add("active-tab");
  
      this.person.forEach(person => person.selectCard());
    }
  }
  
  class PersonBio {
    constructor(person) {
      this.person = person;
  
    }
    selectCard() {
      this.person.style.display = "flex";
    }
  
  }

  let tabs = document.querySelectorAll(".tab");
  
  tabs.forEach((element) => {
    return new TabLink(element);
  })