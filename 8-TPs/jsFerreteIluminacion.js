/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var lamparas;
 	var pagar;
 	var descuento;
 	var cantidad;
 	var marca;
 	var ingresob;
 	var final;

 	cantidad = document.getElementById('Cantidad').value;
 	marca = document.getElementById("Marca").value;
 	cantidad = parseInt(cantidad);

 	lamparas = 35;
 	pagar = lamparas *cantidad;
 	

 	if(cantidad>5)
 	{
 		descuento = pagar*0.5;
 	}
 	else
 	{
 		if(cantidad==5)
 		{
 			if(marca=="ArgentinaLuz")
 			{
 				descuento = pagar *0.4;
 			}
 			else
 			{
 				descuento = pagar *0.3;
 			}
 		}
 		else(cantidad==4)
 		{
 			if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
 			{
 				descuento = pagar *0.25;
 			}
 			else
 			{
 				descuento = pagar *0.2;
 			}
 		}
 		if(cantidad==3)
 		{
 			if(marca=="ArgentinaLuz")
 			{
 				descuento = pagar *0.15;
 			}
 			else
 			{
 				descuento = pagar *0.05;
 			}
 			if(marca=="FelipeLamparas")
 			{
 				descuento = pagar *0.10;
 			}		
 		}
 		descuento = pagar - descuento;

 		if(descuento>120)
 		{
 			ingresob = (descuento *0.10);
 			alert("Usted pago " + ingresob + " de ingresos brutos ");
 		}
 		
 	}

 	document.getElementById("precioDescuento").value = descuento; 
}
