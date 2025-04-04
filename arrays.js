/*let a = [85,97,44,37,76,60];
let sum = 0;

for (let val of a){
    sum = sum+val;
    
}
let avg = sum / a.length;
console.log(`avg a of the class =${avg}`);*/

let items = [250,645,300,900.50];
for (let i=0;i<items.length;i++){
    let offer = items[i]/10;
    items[i] = items[i]-offer;
}
console.log(items);
 
