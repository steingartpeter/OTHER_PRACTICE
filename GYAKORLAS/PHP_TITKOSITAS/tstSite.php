<?php 
    require_once $_SERVER['DOCUMENT_ROOT'] . '/OTHER_PRACTICE/GYAKORLAS/PHP_TITKOSITAS/cls_ENCRYPTER.php';
    
    
    $encrptr = new PHP_CRYPT();
    $res = "... the encrytped string wil be here ...";
    
    if(isset($_POST['rwStr']) && $_POST['rwStr'] != ""){
        //<DEBUG>
        // A $_POST tömb ellenőrzése<br>
        //<code>
        // echo "<p>A POST tömb:<br><pre>";
        // print_r($_POST);
        // echo "</pre></p>";
        //</code>
        //</DEBUG>        
        $encrptr->setRwStr($_POST['rwStr']);
        $encrptr->setEncrAlgo($_POST['sel-algo']);
        $res = $encrptr->getEncrStr();
        
    }else{
        //<DEBUG>
        // Nem volt beállítva form adat, így csak atesztadatot jelenítjük meg.<br>
        //<code>
        // echo "<p>A POST tömb:<br><pre>";
        // print_r($_POST);
        // echo "</pre></p>";
        //</code>
        //</DEBUG>
        
    }

?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf8">
	<title>ENCRYPT PHP</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>

<div class="hdr">
	<h2>PHP ENCRYPTER ( with class implementation )</h2>
</div>

<div class="bdy">
	<p>TESZTPARA</p>
	<form id="frm01" method="POST" action="#">
		<h3>Encrypting form</h3>
		<?php
		  echo "UTC time(Z): " . gmdate("YmdHisZ") . ";<br>";
		  echo "UTC time(O): " . gmdate("YmdHisO") . ";<br>";
		  echo "Loc time(Z): " . date("YmdHisZ") . ";<br>"; 
		  echo "Loc time(O): " . date("YmdHisO") . ";<br>"; 
		?> 
		<hr/>
		<label for="rwStr">String to encrypt:</label><input type="text" id="rwStr" name="rwStr" placeholder="raw string value" ></input><br/>
		<hr/>
		<label for="sel-algo">Encoding algo.:</label>
		<select id="sel-algo" name="sel-algo">
			<option value="SHA512"> SHA512 </option>
			<option value="SHA256"> SHA256 </option>
			<option value="CRC32"> CRC32 </option>
			<option value="md5"> md5 </option>
		</select><br/>
		<hr/>
		<?php 
		if($res == "" ){
		    echo '<label for="rdyStr">Encrytped string:</label>
                <input type="text" id="rdyStr" name="rdyStr" placeholder="encrypted value" value="" ></input>';
		}else{
		    echo '<label for="rdyStr">Encrytped string:</label>
                <input type="text" id="rdyStr" name="rdyStr" placeholder="encrypted value" value="' 
            . $res . '" ></input>';
		}
		?>
		
		<hr/>
		<input type="submit" class="std-btn" value="Encription"></input>
	</form>
</div>
<div class="ftr">
	<p> Made by AX0705, &copy;</p>
</div>
</body>
</html>