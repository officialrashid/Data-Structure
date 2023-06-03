class Trie{

    constructor(){

        this.children = {}
        this.endWord = false
    }

    insert(word){

        let newNode = this

        for(let i=0;i<word.length;i++){

            let char = word[i]

            if(!newNode.children[char]){

                newNode.children[char] = new Trie()
            }
            newNode= newNode.children[char]
        }
        newNode.endWord=true
    }
    autoComplete(prefix){

       let newNode = this
        let word =[]
        for(let i=0;i<prefix.length;i++){

            let char = prefix[i]

            if(!newNode.children[char]){

                return word;
            }
            newNode = newNode.children[char]
        }
        this.display(prefix ,newNode)
    }
    display(prefix ="" , newNode = this){

        if(newNode.endWord){

            console.log(prefix);
        }
        for(let [char , child] of Object.entries(newNode.children)){

            this.display(prefix + char, child)
        }
    }
}
const trie = new Trie()

trie.insert("rashid")
trie.insert("anas")
trie.insert("anbin")
trie.insert("anakha")
trie.insert("shamil")
trie.insert("yenxo")
console.log("befor");
trie.display()
console.log("Aftr");
trie.autoComplete("a")