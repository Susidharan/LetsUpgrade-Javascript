// display only elements containing 'a' in them from array.
let x=prompt("enter size");
let a=new Array();
for(var i=0;i<x;i++)
{
a[i]=prompt("enter the string");
}
for(i=0;i<x;i++)
{

for(var j=0;j<(a[i].length);j++)
{
if(a[i][j]=='a')
{
console.log(a[i]);
break;
}
}

}