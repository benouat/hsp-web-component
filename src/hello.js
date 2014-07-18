var HelloCtrl = function(){
    this.attributes = {
      firstname: { type: "string", binding: "2-way" },
      lastname: { type: "string", binding: "2-way" }
    }

    this.visible = true;

    this.clear = function() {
        this.firstname = this.lastname = '';
    }

    this.toggle = function() {
        this.visible = !this.visible;
    }

    this.modifyAttribute = function() {
        this.lastname = "Youpi";
    }
}

module.exports = HelloCtrl;
