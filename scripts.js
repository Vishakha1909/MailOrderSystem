var product1 = 0;
var product2 = 0;
var product3 = 0;
var product4 = 0;
var product5 = 0;
var inputString;
var productId = 1;

while (productId != 0) 
{
    inputString = window.prompt("Enter the Product Number from 1-5 and 0 if you want to stop: ");
    productId = parseInt(inputString);

    if (productId >= 1 && productId <= 5) 
    {
        inputString = window.prompt("Enter the quantity sold: ");
        var quantity = parseInt(inputString);

        switch (productId) 
        {
            case 1:
                product1 += quantity * 2.98;
                break;
            case 2:
                product2 += quantity * 4.50; 
                break; 
                
            case 3:
                product3 += quantity * 9.98; 
                break;
            case 4:
                product4 += quantity * 4.49; 
                break;
            case 5:
                product5 += quantity * 6.87;
                break;
        } 
    } 
    else if (!Number.isInteger(productId)) 
    {
        window.alert("You must enter the Product Number!");
    } 
    else if(productId != 0)
        window.alert("Invalid Product Number");
} 

document.writeln("<table border = '1'>");
document.writeln("<tr><th>Product #</th>");
document.writeln("<th>Total Sales</th></tr>"); 
document.writeln("<tr><td> Product 1 </td><td>" + product1 + "</td>" 
    + "<tr><td> Product 2 </td><td>" + product2 + "</td></tr>" 
    + "<tr><td> Product 3 </td><td>" + product3 + "</td></tr>" 
    + "<tr><td> Product 4 </td><td>" + product4 + "</td></tr>" 
    + "<tr><td> Product 5 </td><td>" + product5 + "</td></tr></table>");          
