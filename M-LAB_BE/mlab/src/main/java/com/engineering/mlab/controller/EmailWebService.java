package com.engineering.mlab.controller;


import com.engineering.mlab.model.entity.EmailMessage;
import com.engineering.mlab.service.EmailSenderService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mlab/engineering/contact")
public class EmailWebService {

    private final EmailSenderService emailSenderService;

    public EmailWebService(EmailSenderService emailSenderService) {
        this.emailSenderService = emailSenderService;
    }

    @PostMapping("/submit")
    public ResponseEntity<String> submitContactForm(@RequestBody EmailMessage emailMessage) {

        try {
            this.emailSenderService.sendEmail(
                    emailMessage.getFullName(),
                    emailMessage.getFrom(),
                    emailMessage.getSubject(),
                    emailMessage.getMessage());
        } catch (MailException e) {
            return new ResponseEntity<>("Error sending email", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>("Message sent successfully", HttpStatus.OK);

    }

}
