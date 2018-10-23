<?php
    // Menetapkan parameter koneksi database
    $host = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'pharmacydb';
    $charset = 'utf8';

    // Menetapkan parameter PDO
    $dsn = 'mysql:host='.$host.';port=3306;dbname='.$database.';charset='.$charset;
    $options = array(
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
        PDO::ATTR_EMULATE_PREPARES => false,
    );

    // Membuat objek/instan PDO (menghubungkan ke database)
    $pdo = new PDO($dsn, $username, $password, $options);

    // Mengambil data yang diposkan
    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $key = strip_tags($obj->key);

    // Menentukan mode mana yang diminta
    switch ($key) {
        // Menambahkan data baru kedalam tabel biodata
        case 'tambah':
            // Sanitasi nilai yang diberikan URL
            $nim = filter_var($obj->nim, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
            $nama = filter_var($obj->nama, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
            $jk = filter_var($obj->jk, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
            $hobi1 = filter_var($obj->hobi1, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
            $hobi2 = filter_var($obj->hobi2, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
            $hobi3 = filter_var($obj->hobi3, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);

            // Menjalankan PDO dengan prepared statement
            try {
                $sql = 'INSERT INTO register_user(username,mobile,email,password,confirmpassword) VALUES(:username, :mobile, :email, :password, :confirmpassword)';
                $stmt = $pdo->prepare($sql);
                $stmt->bindParam(':username', $username, PDO::PARAM_STR);
                $stmt->bindParam(':mobile', $mobile, PDO::PARAM_STR);
                $stmt->bindParam(':email', $email, PDO::PARAM_STR);
                $stmt->bindParam(':password', $password, PDO::PARAM_STR);
                $stmt->bindParam(':confirmpassword', $confirmpassword, PDO::PARAM_STR);
               
                $stmt->execute();

                echo json_encode(array('message' => 'Data '.$username.' telah disimpan'));
            }
            // Menangkap kesalahan saat menjalankan prepared statement
            catch (PDOException $e) {
                echo $e->getMessage();
            }
        break;

        // Mengupdate/edit data yang ada pada tabel biodata
        case 'edit':

            // Sanitasi nilai yang diberikan URL
            $idData = filter_var($obj->idData, FILTER_SANITIZE_NUMBER_INT);
            $username = filter_var($obj->username, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
            $mobile = filter_var($obj->mobile, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
            $email = filter_var($obj->email, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
            $password = filter_var($obj->password, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
            $confirmpassword = filter_var($obj->password, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
            

            // Menjalankan PDO dengan prepared statement
            try {
                $sql = 'UPDATE register_user SET username= :username, mobile = :mobile, email = :email, password = :password, confirmpassword = :confirmpassword WHERE user_id = :idData';
                $stmt = $pdo->prepare($sql);
                $stmt->bindParam(':username', $username, PDO::PARAM_STR);
                $stmt->bindParam(':mobile', $mobile, PDO::PARAM_STR);
                $stmt->bindParam(':email', $email, PDO::PARAM_STR);
                $stmt->bindParam(':password', $password, PDO::PARAM_STR);
                $stmt->bindParam(':confirmpassword', $confirmpassword, PDO::PARAM_STR);
               
                $stmt->bindParam(':idData', $idData, PDO::PARAM_INT);
                $stmt->execute();

                echo json_encode('Data '.$username.' telah di update');
            }
            // Menangkap kesalahan dalam menjalankan prepared statement
            catch (PDOException $e) {
                echo $e->getMessage();
            }

        break;

        case 'hapus':
            // Sanitasi  id record yang dikirimkan dengan mencocokkan record di tabel
            $idData = filter_var($obj->idData, FILTER_SANITIZE_NUMBER_INT);

            // Menjalankan PDO dengan prepared statement
            /*try {
                $pdo = new PDO($dsn, $username, $password);
                $sql = 'DELETE FROM biodata WHERE id = :idData';
                $stmt = $pdo->prepare($sql);
                $stmt->bindParam(':idData', $idData, PDO::PARAM_INT);
                $stmt->execute();

                echo json_encode('Data telah dihapus');
            }*/

            // Menangkap kesalahan dalam menjalankan prepared statement
            catch (PDOException $e) {
                echo $e->getMessage();
            }

        break;
    }
