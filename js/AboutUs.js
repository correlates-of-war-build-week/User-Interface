//Use of DOM and Components to allow us to filter betweent he different team members.
class TabLink {
    constructor(tabElement) {
      this.tabElement = tabElement;
      //Found the data set associated with each tab.
      this.tabData = tabElement.dataset.tab;
      
  
      //Used the below statement to identify what tabdata is being used so we know what content to showcase.
      if (this.tabData == "all") {
        this.person = document.querySelectorAll(".person");
      } else {
        this.person = document.querySelectorAll(`.person[data-tab='${this.tabData}']`);
      }
      
      //Created a new array which we turn into a class after filtering with ".map" . We are going through the data for person/s being pulled from the if stated.
      this.person = Array.from(this.person).map((person) => {
        return new PersonBio(person)
      });
      
      //this is where we are using dom to help us respond to the users interaction on the webpage.
      this.tabElement.addEventListener("click", () => this.selectTab());
    }
  
    //method that is being called in the dom. It is deteremining how we respond when we click on one of the tabs. It also calls in the method from the "child" class we created above.
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
      
      //this is where we are calling the method from class PerosnBio to access the information we need (the person)
      this.person.forEach(person => person.selectCard());
    }
  }
  
  //class created through TabLink
  class PersonBio {
    constructor(person) {
      this.person = person;
  
    }
    //This is allowing us to see all the content that comes with the person/s that are associated with the tab we clicked on.
    selectCard() {
      this.person.style.display = "flex";
    }
  
  }

  let tabs = document.querySelectorAll(".tab");
  //Grabbing the different roles of the team. 
  
  tabs.forEach((element) => {
    return new TabLink(element);
  })