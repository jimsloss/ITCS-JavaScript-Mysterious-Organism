// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// used to store pAequors numbers as need to be unique
let pAequors = [];

// pAequor creator
const pAequorFactory = () => {  
  num = pAequors.length+1;
  pAequors.push(num);

  return {
    specimenNum: num,
    dna: mockUpStrand(), 
    
    mutate(){
      index = Math.floor(Math.random() * 15)-1;
      let base = this.dna[index];

      let newbase = returnRandBase();
      while(newbase === base){
        newbase = returnRandBase();
      }
      
      this.dna[index] = newbase;
      return(this.dna);
    },

    compareDNA(organism){
      let count = 0;
      for(let i=0; i<15; i++){
        if(organism[i] === this.dna[i]){
          count++;
        }
      }
      let percentage = Math.floor((count/15) *100);
      console.log(`specimen #1 and specimen #2 have ${percentage}% DNA in common.`);
    },

    willLIkelySurvive(){
        let count = 0;
        for(let index =0; index<this.dna.length; index++){
          if(this.dna[index] === 'C' || this.dna[index] === 'G'){
            count ++;
          }
        }
        let percentage = Math.floor((count/this.dna.length) *100);
        return percentage >= 60;
      }
    }
  };


// Creating 30 organisms for theoretical future testing
const organisms = [];

for(let x = 1; x<=30; x++){
    const organism = pAequorFactory();
    organisms.push(organism);
  }

// Printing out the resulting 30 organisms, for validation 
for(const o of organisms){
  console.log(o);
}

