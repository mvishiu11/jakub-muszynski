"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { set, useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Toast, ToastDescription, ToastTitle, ToastClose, ToastProvider, ToastViewport } from "@/components/ui/toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, X } from "lucide-react"
import { useState } from "react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export function Page() {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // This is where you'd typically send the form data to your backend
    console.log(values)
    // Show a success toast
    setOpen(true);
    form.reset()
  }

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="text-xl">Have a question or want to work together? Get in touch!</p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
            <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
            <ToastProvider>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Send Message</Button>
                <ToastViewport
                  className="absolute bottom-full mb-4 w-full max-w-md left-1/2 transform -translate-x-1/2"
                />
                <Toast open={open} onOpenChange={setOpen}>
                <ToastTitle>Message sent!</ToastTitle>
                <ToastDescription>Thank you for your message. I'll get back to you soon.</ToastDescription>
                <ToastClose>X</ToastClose>
              </Toast>
              </form>
            </ToastProvider>
            </Form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Connect with Me</CardTitle>
            <CardDescription>Feel free to reach out through any of these platforms.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <a href="mailto:your.email@example.com" className="hover:underline">your.email@example.com</a>
            </div>
            <div className="flex items-center space-x-2">
              <Linkedin className="h-5 w-5" />
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn Profile</a>
            </div>
            <div className="flex items-center space-x-2">
              <Github className="h-5 w-5" />
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub Profile</a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}