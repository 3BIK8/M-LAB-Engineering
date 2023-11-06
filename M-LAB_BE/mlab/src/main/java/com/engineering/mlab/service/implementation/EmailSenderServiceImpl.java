package com.engineering.mlab.service.implementation;

import com.engineering.mlab.service.EmailSenderService;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderServiceImpl implements EmailSenderService {

    private final JavaMailSender mailSender;

    public EmailSenderServiceImpl(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Override
    public void sendEmail(String fullName, String from, String subject, String message) {

        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setTo("lahjoujiyoussef12@gmail.com");
        simpleMailMessage.setSubject(subject);
        simpleMailMessage.setText("Email: "+from
            +"\n----------------------------------------------------"
            +"--------------------------------------" +"\n\n"+message
            +"\n"+fullName);

        this.mailSender.send(simpleMailMessage);
    }

}
