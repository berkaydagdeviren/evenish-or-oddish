function oddishOrEvenish(num)
{
  if (isNaN(num))
  return 'Pass valid argument';
   const arr = String(num).split('');
   const numArr = arr.map(i => Number(i));
   return numArr.reduce((acc, i) => acc + i) % 2 == 0 ? 'Even' : 'Odd';
}
//console.log(oddishOrEvenish(43))
//console.log(oddishOrEvenish(373))
//console.log(oddishOrEvenish(4433))
//console.log(oddishOrEvenish(0))
//console.log(oddishOrEvenish('asd'))
