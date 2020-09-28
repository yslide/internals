initSidebarItems({"enum":[["EmitFormat","The format in which a slide grammar should be emitted."],["ExprPat","A slide expression pattern."],["Stmt","A statement in a slide program."]],"fn":[["evaluate","Evaluates a list of statements to as simplified a form as possible for each. The evaluation may be partial, as some values (like variables) may be unknown."],["lint_expr_pat","Lints a slide expression pattern."],["lint_stmt","Lints a slide statement list."],["parse_expression_pattern","Parses a tokenized slide expression pattern, emitting the result and any diagnostics."],["parse_statement","Parses a tokenized slide program, emitting the result and any diagnostics."]],"macro":[["intern_str","Interns a string."],["parse_asgn","Parses an assignment."],["parse_expr","Parses an expression."],["parse_stmt","Parses a statement."],["poly","Creates a new Poly."],["rc_expr","Interns an expression."],["rc_expr_pat","Interns an expression."]],"mod":[["common","Common types used by libslide."],["diagnostics","libslide's diagnostic module."],["emit","Emit strategies for the libslide grammar IR."],["evaluator_rules","[Grammar]->[Grammar] transforming rules, used by the [partial_evaluator]."],["grammar","The primary libslide IR."],["linter","Provides linter-like diagnostics for a slide program."],["math","A collection of algorithms used by [evaluation rules][evaluation rules]."],["parser","Parses slide programs into the slide `grammar` IR and produces semantic diagnostics."],["partial_evaluator","libslide's heavy-lifting optimizer, applying simplification rules on the libslide IR."],["scanner","Tokenizes slide programs and produces lexing diagnostics."],["utils","Library utilities."]],"struct":[["EmitConfig","Configuration options for emitting a slide grammar."],["Poly","A polynomial in integer space Z. TODO: Currently, this container only services polynomials with non-negative degrees."],["ProgramContext","A context for evaluating a slide program."],["Span","Describes the character span of a substring in a text."],["StmtList","A list of statements in a slide program."]],"trait":[["Emit","Implements the emission of a type in an EmitFormat."],["Grammar","Describes a top-level item in the libslide grammar."]]});