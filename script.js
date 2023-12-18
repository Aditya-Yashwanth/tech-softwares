#Contact{
    background-image: url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YX4NNnzqqqs6pn6k/background-dWxj9oVaKPFe4qyv.png');
    background-size: cover;
    background-position: center;
}
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: beige;
}

.navbar {
     background-color: #033259;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
}

.navbar .logo {
    font-size: 24px;
}

.nav-links {
    list-style: none;
    display: flex;
}

.nav-links li {
    margin: 0 15px;
}

.nav-links a {
    text-decoration: none;
    color: #fff;
}

.menu-icon {
    display: none;
    font-size: 24px;
    cursor: pointer;
}

.logo img {
    width: 50px;
    height: 35px;
    margin-right: 5px;
    padding-top: 5px;
}

img{
    width: 100%;
    height:100%;
}


.content{
    margin: 3%;
}


.image-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.image-row img {
    max-width: 25%;
    max-height: 25%;
    margin-top: 10px;
    margin-right: 10px;
}

.new-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

}


.image-container {
  position: relative;
  margin-top: 3%;
  width: 220px;
  height: 150px;
}

.overlay-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 82%;
  height: 78%;
  background: rgba(0, 0, 0, 0.5); 
  color: #fff; 
  text-align: center;
  padding: 20px;
  opacity: 0; 
  transition: opacity 0.3s; 
}

.image-container:hover .overlay-content {
  opacity: 1;
}

.cont {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-left: 20%;
        }


@media (max-width: 768px) {
    .nav-links {
        display: none;
        flex-direction: column;
        background-color: #333;
        position: relative;
        top: 0;
        left: 10px;
        right: 0;
        padding:5px 0px;
        z-index: 1001;
    }

    .nav-links.active {
        display: flex;
    }

    .menu-icon {
        display: block;
    }

    .navbar .logo {
    font-size: 15px;
}

.image-row {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; 
}

.image-row img {
    max-width: 96%;
    max-height: 96%;
    margin-top: 10px;
    margin-right: 10px;
}

.new-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.cont {
    margin-left: 0; 
    flex-direction: column;
    align-items: center;
}


}

.scroll-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #333;
            border-radius: 50%;
            padding: 10px;
            z-index: 2;
        }

        .scroll-to-top a {
            text-decoration: none;
            color: #fff;
            font-size: 24px;
        }
