class Shape {
   constructor(background, width, height = width) {
      this.background = background;
      this.width = width;
      this.height = height;
   }
   draw() {
      let div = document.createElement('div')
      document.body.insertAdjacentElement('afterbegin', div)
      div.style.background = this.background;
      div.style.width = this.width + 'px';
      div.style.height = this.height + 'px';
   }
}

class Square extends Shape {
   constructor(background, width, height) {
      super(background, width, height)
   }
}
const a = new Square('green', '100')
a.draw()

class Circle extends Shape {
   constructor(background, width, height) {
      super(background, width, height)

   }
   draw() {
      let div = document.createElement('div')
      document.body.insertAdjacentElement('afterbegin', div) // вставили в body div
      div.style.background = this.background;
      div.style.width = this.width + 'px';
      div.style.height = this.height + 'px';
      div.style.borderRadius = 50 + '%'
   }
}

const p = new Circle('black', '100')
p.draw()



class Rectrangle extends Shape {
   constructor(background, width, height) {
      super(background, width, height)
   }
   draw() {
      let div = document.createElement('div')
      document.body.insertAdjacentElement('afterbegin', div)
      div.style.background = 'none';
      div.style.width = 0 + 'px';
      div.style.height = 0 + 'px';
      div.style.borderLeft = `${this.width / 2}px solid transparent`
      div.style.borderRight = `${this.width / 2}px solid transparent`
      div.style.borderBottom = `${this.height}px solid ${this.background}`

   }
}
const c = new Rectrangle('green', '100', '100')
c.draw()