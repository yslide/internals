(function() {var implementors = {};
implementors["libslide"] = [{"text":"impl UnwindSafe for Assignment","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; UnwindSafe for BinaryExpr&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for InternedStr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RcExpr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Stmt","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StmtList","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; UnwindSafe for UnaryExpr&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Span","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ProgramContext","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for ParseResult&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EvaluationResult","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Poly","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EmitConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Expr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprPat","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StmtKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EmitFormat","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BinaryOperator","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UnaryOperator","synthetic":true,"types":[]},{"text":"impl UnwindSafe for INTERNED_STRS","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EMPTY_STR","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RcExprPat","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VarNameCollector","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for VarAsgnsCollector&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for PatternCollector&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StmtListIterator","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AssignmentOp","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AssociatedDiagnostic","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Diagnostic","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DiagnosticKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ScanErrors","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ScanResult","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Scanner","synthetic":true,"types":[]},{"text":"impl UnwindSafe for InvalidToken","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Token","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TokenType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExtraTokens","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExpectedExpr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MismatchedClosingDelimiter","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IllegalPattern","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IllegalVariable","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UnmatchedClosingDelimiter","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ParseErrors","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExpressionPatternParser","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for ExpressionParser&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LintConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StmtLintRule","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for HomogenousAssignmentLinter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for RedundantNestingLinter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for UnarySeriesLinter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprPatLintRule","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NameCollection","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for SimilarNamesLinter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NameKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IncompatibleDefinitions","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MaybeIncompatibleDefinitions","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PartialEvaluatorErrors","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EqRelation","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PEValidator","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IncompatibleDefinitionsValidator","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for EagerVariableExpander&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for LazyVariableExpander&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; UnwindSafe for PatternMatch&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RuleSet","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for BuildRuleErrors","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RuleName","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PatternMap","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UnresolvedMapping","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Rule","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UnbuiltRule","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Dec2FracError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UnflattenStrategy","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, P&gt; !UnwindSafe for PeekingTakeWhile&lt;'a, T, P&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for PeekIter&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe + UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["slide"] = [{"text":"impl UnwindSafe for Opts","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SlideResult","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for SlideResultBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for ProgramEvaluator&lt;'a&gt;","synthetic":true,"types":[]}];
implementors["slide_ls"] = [{"text":"impl UnwindSafe for ProgramInfo","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for SlideLS","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for ExprFinder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReferenceFinder","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReferenceKind","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()