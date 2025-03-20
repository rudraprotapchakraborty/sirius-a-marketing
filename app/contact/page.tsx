"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { useState } from "react"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [phone, setPhone] = useState("+44")

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0D0B21] text-white py-12"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Your Story Deserves More Than Words</h1>
          <p className="text-xl text-gray-300">Let's Build Something Great Together</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Card className="border-purple-800/20 bg-[#1A1A2E]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col gap-6">
                  {[
                    { label: "Name", id: "name", type: "text" },
                    { label: "Email", id: "email", type: "email" },
                    { label: "Phone", id: "phone", type: "tel" },
                    { label: "Message", id: "message", type: "textarea" },
                  ].map((field, index) => (
                    <motion.div
                      key={field.id}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                      className="space-y-2"
                    >
                      <label htmlFor={field.id} className="text-sm font-medium">
                        {field.label}
                      </label>
                      {field.type === "textarea" ? (
                        <Textarea
                          id={field.id}
                          placeholder={`Your ${field.label.toLowerCase()}`}
                          className="min-h-[100px] border-purple-800/20 bg-purple-900/10 text-white"
                        />
                      ) : field.type === "tel" ? (
                        <PhoneInput
                          country={"gb"}
                          value={phone}
                          onChange={setPhone}
                          inputStyle={{
                            width: "100%",
                            height: "40px",
                            fontSize: "16px",
                            backgroundColor: "rgba(124, 58, 237, 0.1)",
                            border: "1px solid rgba(124, 58, 237, 0.2)",
                            color: "white",
                          }}
                          dropdownStyle={{
                            backgroundColor: "#1A1A2E",
                            color: "white",
                          }}
                          buttonStyle={{
                            backgroundColor: "rgba(124, 58, 237, 0.1)",
                            borderColor: "rgba(124, 58, 237, 0.2)",
                          }}
                        />
                      ) : (
                        <Input
                          id={field.id}
                          type={field.type}
                          placeholder={`Your ${field.label.toLowerCase()}`}
                          className="border-purple-800/20 bg-purple-900/10 text-white"
                        />
                      )}
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300">
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Card className="border-purple-800/20 bg-[#1A1A2E]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">UK Office</h3>
                  <div className="space-y-2">
                    {[
                      {
                        icon: <MapPin className="text-purple-500" />,
                        text: "123 AI Street, Tech City, London, UK TC1 2AB",
                      },
                      { icon: <Phone className="text-purple-500" />, text: "+44 20 1234 5678" },
                      { icon: <Mail className="text-purple-500" />, text: "uk@siriusamarketing.com" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                        className="flex items-center space-x-3"
                      >
                        {item.icon}
                        <p>{item.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Bangladesh Office</h3>
                  <div className="space-y-2">
                    {[
                      {
                        icon: <MapPin className="text-purple-500" />,
                        text: "456 Innovation Road, Dhaka, Bangladesh 1000",
                      },
                      { icon: <Phone className="text-purple-500" />, text: "+880 2 1234 5678" },
                      { icon: <Mail className="text-purple-500" />, text: "bd@siriusamarketing.com" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
                        className="flex items-center space-x-3"
                      >
                        {item.icon}
                        <p>{item.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <Card className="mt-10 border-purple-800/20 bg-[#1A1A2E]">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Location</CardTitle>
          </CardHeader>
          <CardContent>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="aspect-video w-full"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98823492404069!3d40.75889083441755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1706104000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}

