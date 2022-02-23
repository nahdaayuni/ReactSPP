import React from "react";
import "../datasiswa.css"; 

class beranda extends React.Component {
  render() {
    return (
      <div class="cover">
        <div class="img">
          <img
            src="https://pngimage.net/wp-content/uploads/2019/05/vector-png-red-.png"
            width="1263"
            height="800"
          ></img>
        </div>
        <div class="beranda">
          <div class="container p-1 my-3 bg-success text-white rounded col-12">
            <div class="row">
              <div class="col-12">
                <div class="p-2 border" align="center">
                  Selamat Datang <b> Nahda! </b>Di Aplikasi Pembayaran SPP SMK
                  Telkom Malang
                </div>
              </div>
            </div>
          </div>
          <div class="container p-1 my-3 bg-light border text-black rounded col-9">
            <div class="col" align="center">
              <h4>BIODATA SAYA</h4>
            </div>
          </div>
          <div class="container p-1 my-2 bg-light border text-black rounded col-9">
            <div class="col" align="center">
              <h5 class="my-3">Photo of me:</h5>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbR4WztpgqX-e2DDoLRD2IaeIozVSJ87LaLQo4z807Vnz1gNMjYk6y-ixLXGYqM06QhYI&usqp=CAU"
                width="170"
                height="170"
                class="d-inline-block align-top rounded-circle my-4"
                alt="SMK Telkom Malang Logo"
              ></img>
              <ul class="list-group list-group-bordered  my-4">
                <li class="list-group-item">
                  <b>Name : </b> Nahda Ayuni Narindri
                </li>
                <li class="list-group-item">
                  <b>Username : </b> Nahda
                </li>
                <li class="list-group-item">
                  <b>Level : </b> Admin
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default beranda;
