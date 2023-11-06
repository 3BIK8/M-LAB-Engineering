package com.engineering.mlab.service;

public interface EmailSenderService {

    public void sendEmail(String fullName, String from, String subject, String message);

}
