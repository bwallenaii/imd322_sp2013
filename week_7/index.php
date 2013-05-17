<?php
require_once("connect.php");
//make a request to database to get list of products
$products = $db->query("SELECT * FROM `products` LIMIT 0,30");
 ?>
<html>
<head>
	<title>Product List</title>
	<meta name="viewport" content="width=device-width" />
	<link rel="stylesheet" href="css/screen.css" />
	<script src="http://ajax.googleapis.com/ajax/libs/mootools/1.4.5/mootools-yui-compressed.js"></script>
	<script src="js/index.js"></script>
</head>
<body>
	<div id="product-list">
		<?php
			//create a link for each product
			while($product = $products->fetch_object())
			{
				?><a href="#" data-prodid="<?php echo $product->id; ?>"><?php echo $product->name; ?></a> <?php
			}
		 ?>
	</div>
	<div id="product"></div>
</body>
</html>