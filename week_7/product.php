<?php
require_once("connect.php");

$data = (Object) filter_input_array(INPUT_POST, FILTER_SANITIZE_NUMBER_INT);

if(!empty($data->id))
{
	$prodRes = $db->query("SELECT * FROM `products` WHERE `id` = $data->id");
	$product = $prodRes->fetch_object();
	if(empty($product->id))
	{
		die("<p>Product not available.</p>");
	}
}
else
{
	die("<p>Product not available.</p>");
}
?>
<?php
	if(!empty($product->image))
	{
		?><img src="<?php echo $product->image; ?>" /> <?php
	}
?>
<h3><?php echo $product->name; ?></h3>
<p><?php echo $product->description; ?></p>
<p><strong>Price: </strong>$<?php echo $product->price; ?>
