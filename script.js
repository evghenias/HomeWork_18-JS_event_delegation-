class mycontainer {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); 
    }
    first() {
        var first = document.getElementById("text");
      first.firstChild.nodeValue = "You clicked First button";
    }

    second() {
        var first = document.getElementById("text");
        first.firstChild.nodeValue = "You clicked Second button";
    }

    third() {
        var first = document.getElementById("text");
        first.firstChild.nodeValue = "You clicked Third button";
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
          this[action]();
        }
    };
}
    new mycontainer(container);