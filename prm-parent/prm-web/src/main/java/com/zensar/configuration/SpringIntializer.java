/*package com.zensar.configuration;

import javax.servlet.Filter;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

import com.zensar.configuration.CORSFilter;
import com.zensar.configuration.SpringConfiguration;

public class SpringIntializer extends AbstractAnnotationConfigDispatcherServletInitializer{
	 @Override
	    protected Class<?>[] getRootConfigClasses() {
	        return new Class[] {HibernateConfiguration.class };
	    }
	  
	    @Override
	    protected Class<?>[] getServletConfigClasses() {
	        return null;
	    }
	  
	    @Override
	    protected String[] getServletMappings() {
	        return new String[] { "/" };
	    }
	    
	    @Override
	    protected Filter[] getServletFilters() {
	    	Filter [] singleton = { new CORSFilter() };
	    	return singleton;
		}
	 
}
*/