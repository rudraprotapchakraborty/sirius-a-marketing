"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, CheckCircle, AlertCircle } from "lucide-react"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(6, { message: "Please enter a valid phone number" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  subject: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactPage() {
  const [phone, setPhone] = useState("+44")
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [activeTab, setActiveTab] = useState("form")

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      subject: "",
    },
  })

  const onSubmit = async (data: FormValues) => {
    setFormStatus("submitting")
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log("Form submitted:", data)
      setFormStatus("success")
      form.reset()
      setPhone("+44")
      
      // Auto switch to success message
      setTimeout(() => {
        setActiveTab("success")
      }, 300)
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormStatus("error")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-[#0D0B21] to-[#1A1A2E] text-white py-12"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
            Your Story Deserves More Than Words
          </h1>
          <p className="text-xl text-gray-300">Let's Build Something Great Together</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Card className="border-purple-800/20 bg-[#1A1A2E]/80 backdrop-blur-sm shadow-xl shadow-purple-900/10">
              <CardHeader className="border-b border-purple-800/20 pb-4">
                <CardTitle className="text-2xl font-bold">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid grid-cols-2 mb-6 bg-purple-900/20">
                    <TabsTrigger value="form">Contact Form</TabsTrigger>
                    <TabsTrigger value="success">Message Status</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="form">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium">Name</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="Your name"
                                  className="border-purple-800/20 bg-purple-900/10 text-white focus:border-purple-500"
                                />
                              </FormControl>
                              <FormMessage className="text-red-400 text-xs" />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium">Email</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  type="email"
                                  placeholder="Your email"
                                  className="border-purple-800/20 bg-purple-900/10 text-white focus:border-purple-500"
                                />
                              </FormControl>
                              <FormMessage className="text-red-400 text-xs" />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium">Phone</FormLabel>
                              <FormControl>
                                <PhoneInput
                                  country={"gb"}
                                  value={phone}
                                  onChange={(value) => {
                                    setPhone(value);
                                    field.onChange(value);
                                  }}
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
                              </FormControl>
                              <FormMessage className="text-red-400 text-xs" />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium">Subject (Optional)</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="What is this regarding?"
                                  className="border-purple-800/20 bg-purple-900/10 text-white focus:border-purple-500"
                                />
                              </FormControl>
                              <FormMessage className="text-red-400 text-xs" />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium">Message</FormLabel>
                              <FormControl>
                                <Textarea
                                  {...field}
                                  placeholder="Your message"
                                  className="min-h-[120px] border-purple-800/20 bg-purple-900/10 text-white focus:border-purple-500"
                                />
                              </FormControl>
                              <FormMessage className="text-red-400 text-xs" />
                            </FormItem>
                          )}
                        />
                        
                        <Button 
                          type="submit" 
                          disabled={formStatus === "submitting"}
                          className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300 mt-2"
                        >
                          {formStatus === "submitting" ? (
                            <div className="flex items-center gap-2">
                              <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span>Sending...</span>
                            </div>
                          ) : "Send Message"}
                        </Button>
                      </form>
                    </Form>
                  </TabsContent>
                  
                  <TabsContent value="success">
                    <AnimatePresence mode="wait">
                      {formStatus === "success" ? (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Alert className="bg-green-900/20 border-green-500/30 text-green-100">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <AlertTitle className="text-green-300">Message Sent Successfully!</AlertTitle>
                            <AlertDescription className="text-green-200">
                              Thank you for reaching out. We'll get back to you as soon as possible.
                            </AlertDescription>
                          </Alert>
                          <div className="mt-6 text-center">
                            <Button 
                              onClick={() => {
                                setActiveTab("form");
                                setFormStatus("idle");
                              }}
                              variant="outline"
                              className="border-purple-500/30 text-purple-300 hover:bg-purple-900/20"
                            >
                              Send Another Message
                            </Button>
                          </div>
                        </motion.div>
                      ) : formStatus === "error" ? (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Alert className="bg-red-900/20 border-red-500/30 text-red-100">
                            <AlertCircle className="h-5 w-5 text-red-500" />
                            <AlertTitle className="text-red-300">Something went wrong</AlertTitle>
                            <AlertDescription className="text-red-200">
                              There was an error sending your message. Please try again later.
                            </AlertDescription>
                          </Alert>
                          <div className="mt-6 text-center">
                            <Button 
                              onClick={() => {
                                setActiveTab("form");
                                setFormStatus("idle");
                              }}
                              variant="outline"
                              className="border-red-500/30 text-red-300 hover:bg-red-900/20"
                            >
                              Try Again
                            </Button>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-center py-8 text-gray-400"
                        >
                          <p>No messages sent yet.</p>
                          <p className="mt-2">Fill out the contact form to get in touch with us.</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            <Card className="border-purple-800/20 bg-[#1A1A2E]/80 backdrop-blur-sm shadow-xl shadow-purple-900/10">
              <CardHeader className="border-b border-purple-800/20 pb-4">
                <CardTitle className="text-2xl font-bold">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    UK Office
                  </h3>
                  <div className="space-y-3 pl-4 border-l border-purple-800/20">
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
                        className="flex items-center space-x-3 group"
                      >
                        <div className="p-2 bg-purple-900/20 rounded-full group-hover:bg-purple-900/40 transition-colors duration-300">
                          {item.icon}
                        </div>
                        <p className="text-gray-300">{item.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Bangladesh Office
                  </h3>
                  <div className="space-y-3 pl-4 border-l border-purple-800/20">
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
                        className="flex items-center space-x-3 group"
                      >
                        <div className="p-2 bg-purple-900/20 rounded-full group-hover:bg-purple-900/40 transition-colors duration-300">
                          {item.icon}
                        </div>
                        <p className="text-gray-300">{item.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-purple-800/20 bg-[#1A1A2E]/80 backdrop-blur-sm shadow-xl shadow-purple-900/10 flex-grow">
              <CardHeader className="border-b border-purple-800/20 pb-4">
                <CardTitle className="text-2xl font-bold">Business Hours</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {[
                    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                    { day: "Sunday", hours: "Closed" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
                      className="flex justify-between items-center py-2 border-b border-purple-800/10 last:border-0"
                    >
                      <span className="font-medium">{item.day}</span>
                      <span className={`${item.hours === "Closed" ? "text-red-400" : "text-green-400"}`}>
                        {item.hours}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <Card className="mt-10 border-purple-800/20 bg-[#1A1A2E]/80 backdrop-blur-sm shadow-xl shadow-purple-900/10">
          <CardHeader className="border-b border-purple-800/20 pb-4">
            <CardTitle className="text-2xl font-bold">Our Locations</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="aspect-video w-full rounded-lg overflow-hidden"
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
}g