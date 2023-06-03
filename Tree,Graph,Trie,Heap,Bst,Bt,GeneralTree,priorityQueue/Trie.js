class Trie{

    constructor(){

        this.children ={}
        this.endWord = false;
    }
    insert(word){

        let newNode = this

        for(let i=0;i<word.length;i++){

            const char = word[i];

            if(!newNode.children[char]){

                newNode.children[char] = new Trie()
            }
            newNode = newNode.children[char]
        }
        newNode.endWord = true;
    }
    Search(word){

        let newNode = this
         

        for(let i=0;i<word.length;i++){
            const char = word[i]
            if(!newNode.children[char]){

                return false
            }
            newNode = newNode.children[char]
        }
        return newNode.endWord
    }


    autocomplete(prefix) {
        let newNode = this;
        let words = [];
        for (let i = 0; i < prefix.length; i++) {
          const char = prefix[i];
          if (!newNode.children[char]) {
            return words;
          }
          newNode = newNode.children[char];
        }
        this.displayWords(prefix, newNode   );
      }
    

     displayWords(prefix="" , newNode=this) {
    if (newNode.endWord) {
      console.log(prefix);
    }

    for (const [char, child] of Object.entries(newNode.children)) {
      this.displayWords(prefix + char, child);
    }
  }
delete(word) {
    let node = this;
    const stack = [];
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node.children[char]) {
        // word not found in trie
        return false;
      }
      stack.push([node, char]);
      node = node.children[char];
    }
    node.endWord = false;
    
    // delete nodes with no other children
    while (stack.length) {
      const [parent, char] = stack.pop();
      if (Object.keys(node.children).length > 0 || node.endWord) {
        break;
      }
      delete parent.children[char];
      node = parent;
    }
    return true;
  }


}

 const trie = new Trie()

trie.insert("rashid")
trie.insert("rishal")
trie.insert("rishad")
trie.insert("raaa")
trie.insert("abayr")
trie.insert("roy")
// console.log("befor");
trie.delete("rashid")
trie.displayWords()
// console.log(trie);
// console.log("After");
// trie.autocomplete("ra");
// console.log(trie.Search("raaa"));