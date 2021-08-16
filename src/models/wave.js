class Wave {

 constructor(amp, period, phase, p5){
    this.amplitude = amp
    this.period = period
    this.phase = phase
    this.p5 = p5
 }

 calculate(x){
     return Math.sin(this.phase + this.p5.TWO_PI * x / this.period) * this.amplitude;
 }




}


export default Wave