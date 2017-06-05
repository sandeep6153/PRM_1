package com.zensar.configuration;

import javax.servlet.DispatcherType;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

import com.sun.jersey.spi.spring.container.servlet.SpringServlet;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

public class WebServletConfiguration implements WebApplicationInitializer {
    

public void onStartup(ServletContext container) {
	 AnnotationConfigWebApplicationContext rootContext =
		        new AnnotationConfigWebApplicationContext();
		      rootContext.register(HibernateConfiguration.class);

		      // Manage the lifecycle of the root application context
		      container.addListener(new ContextLoaderListener(rootContext));

		      // Create the dispatcher servlet's Spring application context
		      AnnotationConfigWebApplicationContext dispatcherContext =
		        new AnnotationConfigWebApplicationContext();
		      dispatcherContext.register(DispatcherType.class);

		      // Register and map the dispatcher servlet
		      ServletRegistration.Dynamic dispatcher =
		        container.addServlet("dispatcher", new DispatcherServlet(dispatcherContext));
		      dispatcher.setLoadOnStartup(1);
		      dispatcher.addMapping("/*");
}
}