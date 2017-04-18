<?php
$results = scandir('/');
foreach ($results as $result) {
    if ($result === '.' or $result === '..') continue;
    if (is_dir('/' . $result)) {?>
        <a href="<?php echo $result . "/index.html";?>"><?php echo $result;?></a>
    <?php}
}
?>
