<?php
require_once("connect.php");

$output = new stdClass();
$products = array();

$output->name = "Our Products";
$output->version = "2.0";

//This is hand-coded json content
/*
$products[] = new stdClass();
$products[0]->name = "Tim's Turnips";
$products[0]->price = 2.99;
$products[0]->description = "Sure <strong>beets</strong> a radish!";

$products[] = new stdClass();
$products[1]->name = "Wooden Chair";
$products[1]->price = 89.95;
$products[1]->description = "It may hurt to sit on, but at least you're sitting.";
*/
//This is pulling from a database

$prodres = $db->query("SELECT * FROM `products`");

while($product = $prodres->fetch_object())
{
	$products[] = $product;
}


$output->products = $products;

echo json_encode($output);