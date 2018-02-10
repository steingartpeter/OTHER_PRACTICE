<?php
    $svgCode = '';
    $svgCode .= beginSVGTag();
    $endPos = 0;
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>SVG PHP-ből</title>
	<link rel="stylesheet" href="css/base01.css">
</head>
<body>
<div id="main-div">
	<div id="upper-div">
	
	
	</div>
	<div id="lower-div">
		<svg id="svg-base" height="640" width="640" xmlns="http://www.w3.org/2000/svg"
 				xmlns:xlink="http://www.w3.org/1999/xlink">
		<defs>
			<radialGradient id="star-lght01-rad"> 
				<stop offset="10%" stop-color="#FFFFEE"/>
      			<stop offset="95%" stop-color="#FABE55" stop-opacity=".3" />
    		</radialGradient>
    		<filter id="str-lght-blur01">
    			<feGaussianBlur id="fblr01" in="SourceGraphic" stdDeviation="10" />
    		</filter>
		</defs>
		<g id="bg-lyr001">
			<rect id="blck-bgRect01" x="0" y="0" height="640" width="640" style="fill:#050505;"></rect>
		</g>
		<g id="pic-lyr001">
			<circle id="star-bckLght" cx="315" cy="315" r="275" fill="#FABE99" filter="url(#fblr01)" ></circle>
			<circle id="star-baseCrcl" cx="320" cy="320" r="260"></circle>
		</g>
		<g id="lght-lyr001">
			<circle id="star-lightCrcl" cx="320" cy="320" r="240"></circle>
		</g>
		</svg>
	</div>
</div>
</body>
</html>



<?php 
    
function beginSVGTag($id="", $w=100, $h=100){
    if($id != ""){
        $svgTxt = '<g id="' . $id  . "></g>";
    }else{
        $svgTxt = '<g id="basBGLyr00"></g>';
    }
    
    return$svgTxt;
}
function baseBGRect(){
    $svgTxt = '<rect id="bgrect-00" x="0" y="0" height="100" width ="100" style="fill:#ACACFF;" ></rect>';
    return $svgTxt;
}



?>