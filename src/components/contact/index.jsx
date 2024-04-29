"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImage from "../../../public/images/contact.jpg";
import { motion, useTime } from "framer-motion";


function Contact() {
  const variantleft = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };
  const variantright = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0 },
  };
  const variant = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const [response, setResponse] = useState();
  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const templateParams = {
        from_mail: email,
        name: name,
        message: message,
        subject: subject,
        phone: phone,
      };
      const result = await emailjs.send(
        "service_vhv0zar",
        "template_ax81i3s",
        templateParams,
        "uhK_AVg0bCtGj-ygf"
      );

      if (result.status === 200) {
        setResponse("Email sent successfully");
      } else {
        setResponse("Failed to send email");
      }
    } catch (err) {
      setResponse("Failed to send email");
    }
  };
  return (
    <div id="contact" className="w-full p-2 flex items-center py-16" style={{color:"#ffffff"}}>
      <div className="max-w-[1240px] m-auto">
        <motion.p
          variants={variant}
          initial="hidden"
          whileInView={"show"}
          transition={{ duration: 1 }}
          className="text-xl tracking-widest uppercase text-sky-700"
        >
          Contato
        </motion.p>
        <motion.h2
          variants={variant}
          initial="hidden"
          whileInView={"show"}
          transition={{ duration: 1 }}
          className="py-4"
        >
          Tire suas dúvidas
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            variants={variantleft}
            initial="hidden"
            whileInView={"show"}
            transition={{ duration: 1 }}
            className="w-full h-auto shadow-xl bg-[rgba(255,255,255,0.02)] rounded-xl p-4"
          >
            <div className="lg:p-4">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImage}
                  alt="/"
                />
              </div>
              <div style={{color:"#ffffff"}}>
                <h2 className="py-2">Geovane Araujo</h2>
                <p>Full-Stack Developer</p>
                <p className="py-4 text-justify">
                Estou animado para contribuir com minhas habilidades para projetos inovadores
                  e colaborar com equipes que compartilham minha paixão por
                  tecnologia. Aberto a novas oportunidades, estou ansioso
                  trazer minha experiência para projetos que ultrapassam limites e
                  elevar as interações do usuário. Sinta-se à vontade para entrar em contato comigo para
                  colaboração ou qualquer dúvida!!
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={variantright}
            initial="hidden"
            whileInView={"show"}
            transition={{ duration: 1 }}
            className="col-span-3 w-full h-auto shadow-xl bg-[rgba(255,255,255,0.02)]  rounded-xl lg:p-5  z-[20]"
          >
            <div className="p-5 z-0" style={{color:"#ffffff"}}>
              <form onSubmit={handleSendMessage} className="z-0">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Nome</label>
                    <input
                      className="rounded-lg p-2 flex outline-none bg-[rgb(50,49,49)] border-2 border-[rgb(96,96,96)] "
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Número de Telefone
                    </label>
                    <input
                      className=" rounded-lg p-2 flex outline-none bg-[rgb(50,49,49)] border-2 border-[rgb(96,96,96)] "
                      type="text"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">E-mail</label>
                  <input
                    className="rounded-lg p-2 flex outline-none bg-[rgb(50,49,49)] border-2 border-[rgb(96,96,96)]"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Assunto</label>
                  <input
                    className=" rounded-lg p-2 flex outline-none bg-[rgb(50,49,49)] border-2 border-[rgb(96,96,96)]"
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Mensagem</label>
                  <textarea
                    className="rounded-lg p-2 outline-none bg-[rgb(50,49,49)] border-2 border-[rgb(96,96,96)]"
                    rows="5"
                    name="message"
                    draggable="false"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <p className="py-2">{response}</p>
                {/* <div className="flex flex-col justify-center items-center"> */}
                <button
                  type="submit"
                  className="flex justify-self-center hover:scale-90  ease-in-out duration-300  mx-auto p-2 bg-gradient-to-r from-[#5651e5] to-[#709dff] rounded-full"
                >
                  Enviar Mensagem
                </button>
                {/* </div> */}
              </form>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-end">
          <Link href="/">
            <div className="rounded-full bg-purple-800 text-white shadow-sm shadow-gray-800 p-3 cursor-pointer hover:bg-purple-800 scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-white" size={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
