// Classe abstrata VoteSystem
abstract class VoteSystem {
    protected votes: Record<string, number>; 
  
    constructor() {
      this.votes = {};
    }
  
    
    abstract voteFor(candidate: string): void;
  
 
    abstract getResults(): object;
  }
  

  class Election extends VoteSystem {
  
   
    voteFor(candidate: string): void {
      if (this.votes[candidate]) {
        this.votes[candidate]++;
      } else {
        this.votes[candidate] = 1;
      }
      console.log(`Voto registrado para o candidato "${candidate}".`);
    }
  
   
    getResults(): object {
      return this.votes;
    }
  }
  
 
  class Poll extends VoteSystem {
  
   
    voteFor(candidate: string): void {
      if (this.votes[candidate]) {
        this.votes[candidate]++;
      } else {
        this.votes[candidate] = 1;
      }
      console.log(`Voto registrado para o candidato "${candidate}".`);
    }
  
   
    getResults(): object {
      const sortedResults = Object.entries(this.votes)
        .sort((a, b) => b[1] - a[1]) 
        .map(([candidate, votes]) => ({ candidate, votes }));
      return sortedResults;
    }
  }
  

  

  const election = new Election();
  election.voteFor("Candidato A");
  election.voteFor("Candidato B");
  election.voteFor("Candidato A");
  election.voteFor("Candidato C");
  election.voteFor("Candidato A");
  console.log("Resultados da Eleição:", election.getResults());
  

  const poll = new Poll();
  poll.voteFor("Candidato X");
  poll.voteFor("Candidato Y");
  poll.voteFor("Candidato X");
  poll.voteFor("Candidato Z");
  poll.voteFor("Candidato X");
  console.log("Resultados da Pesquisa:", poll.getResults());
  