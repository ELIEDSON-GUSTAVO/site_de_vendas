package com.example;

import javax.enterprise.context.RequestScoped;
import javax.inject.Named;

@Named
@RequestScoped
public class PageTransitionBean {

    private String fadeEffect;

        public String getFadeEffect() {
                return fadeEffect;
                    }

                        public void setFadeEffect(String fadeEffect) {
                                this.fadeEffect = fadeEffect;
                                    }
                                    }
                                    