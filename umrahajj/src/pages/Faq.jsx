import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import './Faq.css'

class Faq extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="12">
                        <div className="content-ask">
                            <h1>Frequently Asked Questions </h1>
                            <div class="search-container">
                                {/* <form >
                                <input class="search" type="text" placeholder="search your question" name="search"/>
                                <button class="btn btn-success22 btn7" type="submit">SEARCH</button>
                                </form> */}
                            </div>
                            <div className="ask-group">
                                <div className="ask-content1">
                                <p> Q : Apa itu Umrahajj?</p>
                                </div>
                                <div  className="ask-content2">
                                    <p> A : Umrahajj merupakan sebuah Marketplace Platform berbasis Mobile Application (Android & Ios) untuk Umrah di Indonesia. UmraHajj merupakan sebuah sub-business dari YAZ Ventures SDN BHD yang sudah berpengalaman di dunia bisnis digital.</p>
                                </div>
                                <div class="ask-content3">
                                    <p>Q : Saya ingin memesan paket Umrah. Apakah Umrahajj menjual paket Umrah?</p>
                                </div> 
                                <div  class="ask-content2">
                                    <p>A : Dengan Umrahajj, anda dapat membandingkan harga paket Umrah dari semua Penyelenggara Perjalanan Ibadah Umrah berizin yang terdaftar di Kementerian Agama. Setelah hasil pencarian keluar, anda dapat memilih Paket yang sesuai dengan kebutuhan Anda dan dapat langsung memesan paket tersebut melalui Umrahajj.co.</p>
                                </div> 
                                <div class="ask-content3">
                                    <p>Q : Bagaimana cara memesan/booking paket Umrah lewat Umrahajj? Apakah saya bisa memesan langsung di kantor Umhrajj? Di mana kantor cabang Umrahajj di kota saya?</p>
                                </div>
                                <div  class="ask-content2">
                                    <p>A : Anda dapat melakukan booking langsung melalui aplikasi UmraHajj yang tersedia untuk pengguna Android & Ios. Setelah melakukan pencarian, anda dapat langsung melakukan pemesanan dengan cara meng-klik tombol Pesan dan kami akan memandu Anda ke halaman pengisian data pemesan hingga melakukan pembayaran.

                                        Anda dapat mengunjungi Kantor Umrahajj.co di Jl. ……………</p>
                                </div>
                                    <div class="ask-content3">
                                    <p>Q : Bagaimana cara menghubungi Umrahajj.co?</p>
                                </div>  
                                <div  class="ask-content2">
                                    <p>A : Untuk pertanyaan yang belum terjawab di panduan pemakaian maupun FAQ ini, Anda bisa menghubungi Umrahajj melalui berbagai jalur komunikasi resmi kami, baik melalui email di .......@Umrahajj.co maupun dengan cara menelepon kami, ke nomor ………………………. Untuk informasi lebih Lengkap, anda dapat melihat list kontak yang tersedia di fitur Hubungi Kami.</p>
                                </div>
                                <div class="ask-content3">
                                        <p>Q : Produk dan Layanan</p>
                                </div>  
                                <div  class="ask-content2">
                                    <p>A : Umrahajj berkomitmen untuk menyediakan paket perjalanan Umrah dari perusahaan tour and travel yang telah terverifikasi dan dapat dipercaya secara pelayanan dan kualitas untuk jamaah yang ingin melaksanakan ibadah Umrah sesuai dengan tuntunan Al-Quran dan Sunnah Rasulullah Saw.
									Di samping itu aplikasi Umrahajj juga memberikan layanan yang terbaik untuk jamaah demi menunjang kesempurnaan ibadah Umrah mereka. Umrahajj sendiri dilengkapi dengan fitur pencarian masjid terdekat, penunjuk arah kiblat, pengingat waktu sholat, restoran halal, dan sebagainya.</p>
							    </div>
                                <div class="ask-content3">
									<p>Q : Kemudahan dan Keamanan Pembayaran</p>
								</div>  
								<div  class="ask-content2">
									<p>A : Umrahajj menyediakan berbagai pilihan pembayaran melalui transfer Sesama/Antar Bank, Virtual Account, Payment Gateway hingga Internet Banking.
									</p>
								</div>
								<div class="ask-content3">
									<p>Q : Layanan 24 Jam</p>
								</div>  
								<div  class="ask-content2">
									<p>A : Kami akan senantiasa siap membantu anda dalam mendapatkan layanan terbaik di Umrahajj.
									</p>
								</div>
								<div class="ask-content3">
									<p>Q : Pemberian Peringkat Produk</p>
								</div>  
                                <div  class="ask-content2">
									<p>A : Umrahajj membantu pelanggan untuk mendapatkan paket terbaik dengan cara memberikan peringkat yang adil terhadap Mitra (Partners) kami dengan sistem scoring.
									</p>
								</div>
								<div class="ask-content3">
									<p>Q : Apakah Solusi yang diberikan / ditawarkan oleh Umrahajj.co?</p>
								</div>  
								<div  class="ask-content2">
								    <p>A : Umrahajj memberikan solusi kepada :
										Mitra Kami :  Pemanfaatkan Umrahajj.co sebagai media promosi dan perluasan akses pasar yang disediakan oleh Umrahajj.co terhadap paket-paket dan layanan yang disediakan oleh Penyelenggara Perjalanan Ibadah Umrah.
																	
										Umrahajj Agent: Pemanfaatkan Umrahajj.co sebagai Mitra tanpa dipungut biaya apapun untuk mempromosikan paket perjalanan ibadah Umrah yang terdapat di Website umrahajj.co.
																	
						                Untuk pendaftaran sebagai Umrahajj agent silahkan klik link berikut : …………………………………….</p>
								</div>

								<div class="ask-content3">
									<p>Q : Apa Manfaat Membeli Paket Perjalanan Melalui Umrahajj.co ?</p>
								</div>  
								<div  class="ask-content2">
									<p>A : 1. Memiliki berbagai pilihan paket perjalanan dari berbagai Penyelenggara Perjalanan Ibadah Umrah.
										<br/>
									2. Dapat membandingkan harga setiap paket perjalanan yang tersedia di platform Umrahajj
									    <br/>
									3. Menyajikan Paket Perjalanan dengan harga yang kompetitif.
										<br/>
									4. Mitra Penyelenggara Perjalanan Ibadah Umrah resmi terdaftar di Kementrian Agama dan pasti Keberangkatannya
									</p>
								</div>
								<div class="ask-content3">
									<p>Q : Mengapa Saya harus Menggunakan Layanan Umrahajj.co?</p>
								</div>  
							
								<div  class="ask-content2">
									<p>A : <b>Pelayanan yang Berkualitas</b>
                                    <br/>
									Jamaah akan diberikan pelayanan sejak saat pendaftaran, kelengkapan administrasi, keberangkatan sampai dengan kembalinya ke negara asal.
									<br/>
								    <b>Terpercaya</b>
									<br/>
									Sistem teknologi Umrahajj memberikan jaminan kepastian keberangkatan bagi para jamaah, karena anda dapat memonitoring progress kelengkapan dokumen anda.				
									<br/>
																			<b>Paket Umrah Terlengkap</b><br/>
																			Pelanggan dapat mencari dan membandingkan fasilitas dari seluruh paket Umrah yang tersedia dari berbagai Tour dan Travel Umrah.
																			<br/>
																			<b>Jaminan Keamanan Transaksi</b><br/>
																			Integritas kami dalam menjaga kerahasiaan data dan keamanan transaksi didukung oleh sistem keamanan Doku.
							
																		</p>
																	</div>
                                                                    <div class="ask-content3">
																		<p>Q : Apakah Umrahajj Menjual Paket Umrah Secara Langsung?</p>
																	</div>  
								
																		<div  class="ask-content2">
																			<p>A : Umrahajj tidak menyediakan pembelian paket umrah secara langsung (offline). Segala jenis paket perjalanan yang tersedia di Platform kami merupakan milik partner Umrahajj yang memasarkan produk mereka melalui Umrahajj.co dan Umrahajj menyediakan pembelian secara online melalui website Umrahajj.co dan juga melalui UH Agent.
																				
																			</p>
																		</div>

																		<div class="ask-content3">
																			<p>Q : Umrahajj Agent</p>
																		</div>  
									
																			<div  class="ask-content2">
																				<p>A : Bagaimana caranya saya bisa menjadi Umrahajj Agent?

																					Yang harus Anda lakukan adalah klik pada ‘Create Account’ link pada halaman utama kami dan silahkan mengisi biodata lengkap Anda. Setelah Anda mengkonfirmasi account Anda, Anda akan mendapatkan informasi mengenai waktu, tempat dan materi training untuk menjadi UH Agent dengan segala keuntungannya tanpa dipungut biaya apapun.
																					
																				</p>
																			</div>

																			<div class="ask-content3">
																				<p>Q : Pembatalan/Perubahan Data

																					Cancellation/Pembatalan, Refund, Pengubahan Jadwal dan Pengubahan Nama Pemesan</p>
																			</div>  
										
																				<div  class="ask-content2">
																					<p>A : <b>Bagaimana cara membatalkan paket Umrah yang sudah saya pesan?</b><br/>
																						Anda dapat melakukan pembatalan paket Umrah dengan menghubungi call center umrahajj.co dengan tetap memperhatikan syarat dan ketentuan pembatalan paket Umrah dari PPIU bersangkutan.
																						<br/>
																						<b>Bagaimana cara menghubungi umrahajj.co?</b>
																						<br/>
																						Untuk pertanyaan yang belum terjawab di panduan pemakaian maupun FAQ ini, Anda bisa menghubungi Umrahajj melalui berbagai jalur komunikasi resmi kami, baik melalui email di .......@Umrahajj.co maupun dengan cara menelepon kami, ke nomor ………………………. Untuk informasi lebih Lengkap, anda dapat melihat list kontak yang tersedia di fitur Hubungi Kami.
																				</p>
																				</div>
    
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
            <Col md="12">
                <div class="content-ask1 content-faq">
                <h1>Answer Not Found?</h1>
                    <p>Just contact us, Insha Allah we give best solution.</p>
                    <img src={require("../images/4-layers.png")}/>
                    <br/>
                    <a href="#"><button class="contact-ask ask2">contact us</button></a>
               </div>
        </Col>
        </Row>
            </Container>        
        );
    }
}

export default Faq;