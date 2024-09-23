// // src/components/common/footer/Footer.jsx
// import React from 'react';
// // import './Foot/er.css';
// import '../../css/Footer.css'

// const Footerr = () => {
//     return (
//         <footer className="footer">
//             <div className="footer-sections">
//                 <div className="footer-section">
//                     <h3>الطلاب</h3>
//                     <ul>
//                         <li><a href="#">مدونة Preply</a></li>
//                         <li><a href="#">الأسئلة والأجوبة</a></li>
//                         <li><a href="#">إحالة صديق</a></li>
//                         <li><a href="#">دراسات Preply</a></li>
//                         <li><a href="#">اختر معلمك</a></li>
//                         <li><a href="#">خصومات Preply</a></li>
//                     </ul>
//                 </div>
//                 <div className="footer-section">
//                     <h3>جهات اتصال</h3>
//                     <ul>
//                         <li>فلسطين الخليل</li>
//                         <li>شركة بذور</li>
//                     </ul>
//                 </div>
//                 <div className="footer-section">
//                     <h3>مدرسون خاصون</h3>
//                     <ul>
//                         <li><a href="#">مدرسون إنجليزي</a></li>
//                         <li><a href="#">مدرسون فرنسي</a></li>
//                         <li><a href="#">مدرسون إسباني</a></li>
//                         <li><a href="#">مدرسون ألماني</a></li>
//                         <li><a href="#">مدرسون صيني</a></li>
//                         <li><a href="#">مدرسون اللغة العربية</a></li>
//                         <li><a href="#">مدرسون الرياضيات</a></li>
//                     </ul>
//                 </div>
//                 <div className="footer-section">
//                     <h3>مدرسون قريبون منك</h3>
//                     <ul>
//                         <li><a href="#">مدرسون لغةإنجليزي القدس</a></li>
//                         <li><a href="#">مدرسون لغة إنجليزية في رام الله</a></li>
//                         <li><a href="#">مدرسون لغة عربية في نابلس</a></li>
//                         <li><a href="#">مدرسون لغة إنجليزية في الخليل</a></li>
//                     </ul>
//                 </div>
//                 <div className="footer-section">
//                     <h3>من نحن</h3>
//                     <ul>
//                         <li><a href="#">من نحن</a></li>
//                         <li><a href="#">كيف تعمل</a></li>
//                         <li><a href="#">تسميات Preply</a></li>
//                         <li><a href="#">العمل لدى Preply!</a></li>
//                         <li><a href="#">الحالة</a></li>
//                         <li><a href="#">دراسات Preply</a></li>
//                         <li><a href="#">نحن نقف مع أوكرانيا</a></li>
//                         <li><a href="#">برنامج الانضمام</a></li>
//                     </ul>
//                 </div>
//                 <div className="footer-section">
//                     <h3>الدعم</h3>
//                     <ul>
//                         <li><a href="#">هل تحتاج إلى أي مساعدة؟</a></li>
//                     </ul>
//                 </div>
//                 <div className="footer-section">
//                     <h3>تعلم</h3>
//                     <ul>
//                         <li><a href="#">تعلم الإنجليزية على النت</a></li>
//                         <li><a href="#">تعلم الإسبانية عبر الإنترنت</a></li>
//                         <li><a href="#">تعلم الفرنسية عبر الإنترنت</a></li>
//                         <li><a href="#">تعلم لغات أخرى</a></li>
//                     </ul>
//                 </div>
//                 <div className="footer-section">
//                     <h3>تابعنا</h3>
//                     <ul>
//                         <li><a href="#">Facebook</a></li>
//                         <li><a href="#">Instagram</a></li>
//                         <li><a href="#">Youtube</a></li>
//                         <li><a href="#">LinkedIn</a></li>
//                         <li><a href="#">TikTok</a></li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="footer-bottom">
//                 <p>© 2012-2024 Company budhur.</p>
//             </div>
//         </footer>
//     );
// };

// export default Footerr;
// Filename - components/Footer.js

import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
         
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">
                            Aim
                        </FooterLink>
                        <FooterLink href="#">
                            Vision
                        </FooterLink>
                        <FooterLink href="#">
                            Testimonials
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">
                            Writing
                        </FooterLink>
                        <FooterLink href="#">
                            Internships
                        </FooterLink>
                        <FooterLink href="#">
                            Coding
                        </FooterLink>
                        <FooterLink href="#">
                            Teaching
                        </FooterLink>
                    </Column>
                    {/* <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">
                            Uttar Pradesh
                        </FooterLink>
                        <FooterLink href="#">
                            Ahemdabad
                        </FooterLink>
                        <FooterLink href="#">
                            Indore
                        </FooterLink>
                        <FooterLink href="#">
                            Mumbai
                        </FooterLink>
                    </Column> */}
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;
