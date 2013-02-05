/*******************************************************************************
 * @license
 * Copyright (c) 2013 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/
 
({
	baseUrl: "../../web/",
	closure: {
		CompilerOptions: {},
		CompilationLevel: 'SIMPLE_OPTIMIZATIONS',
		loggingLevel: 'WARNING'
	},
	paths: {
		i18n: '../../org.eclipse.orion.client.core/web/requirejs/i18n'
	},
	name: "orion/editor/edit",
	preserveLicenseComments: false,
	uglify: {
		ascii_only: true
	},
	wrap: {
		start: "",
		end: "\ndefine(['orion/editor/edit'], function(edit) {return edit;});"
	},
	out: "test/orioneditor.js"
})