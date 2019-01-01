package group.aixiao.flowers.interceptor;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;
@Configuration
public class WebAppConfig extends WebMvcConfigurationSupport{

    @Autowired
    LoginInterceptor loginInterceptor;

    @Override
    protected void addInterceptors(InterceptorRegistry registry) {
        // registry.addInterceptor(loginInterceptor).addPathPatterns("/**/**").excludePathPatterns("/login");
    }
}
