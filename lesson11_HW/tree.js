class Tree{
    constructor(root){
        this.root = new Node(root);
        this.nodes = 1;
    }
    traverseDF(callback){
        (function recurce(currentNode) {
            for(let i = 0; i < currentNode.children.length; i++){
                recurce(currentNode.children[i])
            }

            callback(currentNode);
        })(this.root);
    }
    contains(callback, traversal){
        traversal.call(this, callback);
    }
    add(data, toData, traversal){
        const child = new Node(data);
        let parent = null;
        let callback = function (node) {
            if(node.data == toData){
                parent = node;
            }
        };

        this.contains(callback, traversal);

        if(parent){
            parent.children.push(child);
        }else{
            throw new Error('Нода не найдена');
        }
        this.nodes++;
    }
}
class Node{
    constructor(data){
        this.data = data;
        this.parent = null;
        this.children = [];
    }
}

function reconstructTree(inOrder, preOrder) {
    const tree = new Tree(preOrder[0]);
    let left = inOrder.slice(0, inOrder.indexOf(preOrder[0]));
    let right = inOrder.slice(inOrder.indexOf(preOrder[0])+1);
    makeTree(tree, inOrder, preOrder,left, right, preOrder[0]);
    console.log(tree)
}
function makeTree(tree, inOrder, preOrder, left, right, lastNode) {



    // for(let i=0; i< preOrder.length; i++){
    //     for(let j=0; j<left.length; j++){
    //         if(left[j] == preOrder[i]){
    //             tree.add(left[j], lastNode, tree.traverseDF);
    //             let newleft = left.slice(0, inOrder.indexOf(left[j]));
    //             let newright = left.slice(inOrder.indexOf(left[j])+1);
    //             if(newleft.length == 1){
    //                 tree.add(left[0], left[j], tree.traverseDF);
    //             }
    //             if(newleft.length == 0) {
    //                 return true;
    //             }
    //             makeTree(tree, inOrder, preOrder, newleft, newright, left[j]);
    //         }
    //     }
    // }
}
reconstructTree([1,2,3,4,5,6], [4,2,1,3,6,5])
