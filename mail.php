<?php

$recepient = "adilet.toksobaev@gmail.com";
$sitename = "Evvadent";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$date = trim($_POST["date"]);
$time = trim($_POST["time"]);

$message = "Имя: $name \nEmail: $email \nТелефон: $phone\nДата: $date\nВремя: $time";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");