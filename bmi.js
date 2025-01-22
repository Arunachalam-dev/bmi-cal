
   function bmi()
    {
        const x= parseFloat( document.getElementById("HEIGHT").value);
        const y= parseFloat (document.getElementById("WEIGHT").value);
        let d= "";
        // const z= y /(x*x);
        const z = y / Math.pow(x/100,2);
        // let out = parseInt(y)  / parseInt(z);
       
       
if (z<=18.5)
 {
    d ="underweing";
 }
else if (z>=18.5 && z<=24.9)
{
    d ="Normal";
}
else if (z >=25 && z<= 29.9)
    {
    d ="overweing"; 
}
else if (z>=30)
{
    d ="obesity";

}   
document.write ("BMI VALUE :"  + z.toFixed(2) +"<br>");
document.write("BMI WEIGHT :" + d );
    }

   

   
    
