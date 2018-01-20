<?php
//<M>
//×-
//@-FILENÉV   : OTHER_PRACTICE - cls_ENCRYPTER.php-@
//@-SZERZŐ    : AX07057-@
//@-LÉTREHOZVA:  2018. jan. 20.-@
//@-FÜGGŐSÉGEK:
//×-
// @-- JELENLEG NINCS ILYEN -@
//-×
//-@
//@-LEÍRÁS    :
// Osztályszinten ad egy encyptert a különböző hivatalos XML beküldése aláírásainak, és
// egyéb titkosított elemeinek generálásáshoz.
//-@
//@-MÓDOSÍTÁSOK :
//×-
// @-- ... -@
//-×
//-@
//-×
//</M>

class PHP_CRYPT{
//<CLS>
// CLASS: PHP_CRYPT
// CREATED BY: AX07057
// CREATED ON: 2018-01-20
// DECRIPTION:<br>
// This class offers encryption services for authorities website comunication requests.
//</CLS>
    
    
    //<nn>
    // The class level variables:<br>
    //×-
    // @-- $rwStr  the RAW string which should be encoded -@
    // @-- $encrStr the result string which shoudld be returned -@
    //-×
    //</nn>
    private $rwStr = "";
    private $encrStr = "";
    private $alg = "";
    
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    //////####################                PUBLIC SECTION                  ####################//////
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    
    public function __construct(){
    //<SF>
    // 2018. jan. 20.<br>
    // The constructor, not much just set a standard encryption setup, with a default string.<br>
    // PARAMÉTEREK:
    //×-
    // @-- @param ... = ... -@
    //-×
    //MÓDOSTÁSOK:
    //×-
    // @-- ... -@
    //-×
    //</SF>
        $this->rwStr = "jelszavam";
        $this->alg = "SHA512";
        //<DEBUG>
        // Úgy tűnik a tagfüggvények hívása a konstruktorban nem működik...<br>
        //<code>
        //$this->encrStr = $this->getEncrStr($this->alg, $this->rwStr);
        //</code>
        //</DEBUG>
        
        $this->encrStr = strtoupper(hash($this->alg, $this->rwStr));
    }
    
    public function getEncrStr(){
    //<SF>
    // 2018. jan. 20.<br>
    // Nothing special, just return the encrypted result.<br>
    // PARAMÉTEREK:
    //×-
    // @-- getter => no incoming parameter -@
    //-×
    //MÓDOSTÁSOK:
    //×-
    // @-- ... -@
    //-×
    //</SF>
        
        return $this->encrypt();
    }
    
    public function setRwStr($s){
    //<SF>
    // 2018. jan. 20.<br>
    // A kódolandó sztringérték beállítása.<br>
    // PARAMÉTEREK:
    //×-
    // @-- @param ... = ... -@
    //-×
    //MÓDOSTÁSOK:
    //×-
    // @-- ... -@
    //-×
    //</SF>
        $this->rwStr = $s;
    }
    
    public function setEncrAlgo($s){
    //<SF>
    // 2018. jan. 20.<br>
    // Ez a függvény beállítja a kódoslási algoritmust.<br>
    // PARAMÉTEREK:
    //×-
    // @-- @param $s = a kódolási algoritmu nevét tartalmazü sztring (SHA512, SHA256, CRC32, stb) -@
    //-×
    //MÓDOSTÁSOK:
    //×-
    // @-- ... -@
    //-×
    //</SF>
        $this->alg = $s;
    }
    
    
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    //////####################               PRIVATE SECTION                  ####################//////
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    
    private function encrypt($algo = "", $s = ""){
    //<SF>
    // 2018. jan. 20.<br>
    // Ez a függvény végzi a bekódolást a paraméterben kapott algoritmus szerint.<br>
    // PARAMÉTEREK:
    //×-
    // @-- @param $algo = a használandó titkosítási algoritmus -@
    //-×
    //MÓDOSTÁSOK:
    //×-
    // @-- ... -@
    //-×
    //</SF>
        if($algo == ""){
            $algo = $this->alg;
        }
        if($s == ""){
            $s = $this->rwStr;
        }
        //<DEBUG>
        // A teszteléshez a függvény paramétereit kiírahtajuk.<br>
        //<code>
        // echo "hash => str: " . $s . ", algo: " . $algo . "!<br>";
        //</code>
        //</DEBUG>
        
        
        return strtoupper(hash($algo, $s));
    }
    
}

    



?>