// Compiled by ClojureScript 0.0-2173
goog.provide('ants_cljs.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom');
ants_cljs.core.dim = 20;
ants_cljs.core.nants_sqrt = 3;
ants_cljs.core.food_places = 10;
ants_cljs.core.food_range = 100;
ants_cljs.core.pher_scale = 20.0;
ants_cljs.core.food_scale = 30.0;
ants_cljs.core.evap_rate = 0.99;
ants_cljs.core.animation_sleep_ms = 100;
ants_cljs.core.ant_sleep_ms = 40;
ants_cljs.core.evap_sleep_ms = 1000;
ants_cljs.core.is_running = false;
ants_cljs.core.log_flags = cljs.core.PersistentHashSet.EMPTY;
/**
* @param {...*} var_args
*/
ants_cljs.core.logj = (function() { 
var logj__delegate = function (flag,args){if(cljs.core.contains_QMARK_.call(null,ants_cljs.core.log_flags,flag))
{return console.log([cljs.core.str(args)].join(''));
} else
{return null;
}
};
var logj = function (flag,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return logj__delegate.call(this,flag,args);};
logj.cljs$lang$maxFixedArity = 1;
logj.cljs$lang$applyTo = (function (arglist__17405){
var flag = cljs.core.first(arglist__17405);
var args = cljs.core.rest(arglist__17405);
return logj__delegate(flag,args);
});
logj.cljs$core$IFn$_invoke$arity$variadic = logj__delegate;
return logj;
})()
;
ants_cljs.core.do_pause = (function do_pause(){if(cljs.core.truth_(ants_cljs.core.is_running))
{return ants_cljs.core.is_running = false;
} else
{return ants_cljs.core.is_running = true;
}
});

/**
* @constructor
* @param {*} food
* @param {*} pher
* @param {*} ant
* @param {*} home
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
ants_cljs.core.cell = (function (food,pher,ant,home,__meta,__extmap){
this.food = food;
this.pher = pher;
this.ant = ant;
this.home = home;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
ants_cljs.core.cell.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4024__auto__){var self__ = this;
var this__4024__auto____$1 = this;var h__3854__auto__ = self__.__hash;if(!((h__3854__auto__ == null)))
{return h__3854__auto__;
} else
{var h__3854__auto____$1 = cljs.core.hash_imap.call(null,this__4024__auto____$1);self__.__hash = h__3854__auto____$1;
return h__3854__auto____$1;
}
});
ants_cljs.core.cell.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4029__auto__,k__4030__auto__){var self__ = this;
var this__4029__auto____$1 = this;return cljs.core._lookup.call(null,this__4029__auto____$1,k__4030__auto__,null);
});
ants_cljs.core.cell.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4031__auto__,k17407,else__4032__auto__){var self__ = this;
var this__4031__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k17407,new cljs.core.Keyword(null,"food","food",1017053136)))
{return self__.food;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k17407,new cljs.core.Keyword(null,"pher","pher",1017344023)))
{return self__.pher;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k17407,new cljs.core.Keyword(null,"ant","ant",1014000985)))
{return self__.ant;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k17407,new cljs.core.Keyword(null,"home","home",1017112657)))
{return self__.home;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k17407,else__4032__auto__);
} else
{return null;
}
}
}
}
}
});
ants_cljs.core.cell.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4036__auto__,k__4037__auto__,G__17406){var self__ = this;
var this__4036__auto____$1 = this;var pred__17409 = cljs.core.keyword_identical_QMARK_;var expr__17410 = k__4037__auto__;if(cljs.core.truth_(pred__17409.call(null,new cljs.core.Keyword(null,"food","food",1017053136),expr__17410)))
{return (new ants_cljs.core.cell(G__17406,self__.pher,self__.ant,self__.home,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17409.call(null,new cljs.core.Keyword(null,"pher","pher",1017344023),expr__17410)))
{return (new ants_cljs.core.cell(self__.food,G__17406,self__.ant,self__.home,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17409.call(null,new cljs.core.Keyword(null,"ant","ant",1014000985),expr__17410)))
{return (new ants_cljs.core.cell(self__.food,self__.pher,G__17406,self__.home,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17409.call(null,new cljs.core.Keyword(null,"home","home",1017112657),expr__17410)))
{return (new ants_cljs.core.cell(self__.food,self__.pher,self__.ant,G__17406,self__.__meta,self__.__extmap,null));
} else
{return (new ants_cljs.core.cell(self__.food,self__.pher,self__.ant,self__.home,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4037__auto__,G__17406),null));
}
}
}
}
});
ants_cljs.core.cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4043__auto__,writer__4044__auto__,opts__4045__auto__){var self__ = this;
var this__4043__auto____$1 = this;var pr_pair__4046__auto__ = (function (keyval__4047__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4044__auto__,cljs.core.pr_writer,""," ","",opts__4045__auto__,keyval__4047__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__4044__auto__,pr_pair__4046__auto__,"#ants-cljs.core.cell{",", ","}",opts__4045__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"food","food",1017053136),self__.food],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pher","pher",1017344023),self__.pher],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ant","ant",1014000985),self__.ant],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"home","home",1017112657),self__.home],null))], null),self__.__extmap));
});
ants_cljs.core.cell.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4034__auto__,entry__4035__auto__){var self__ = this;
var this__4034__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4035__auto__))
{return cljs.core._assoc.call(null,this__4034__auto____$1,cljs.core._nth.call(null,entry__4035__auto__,0),cljs.core._nth.call(null,entry__4035__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4034__auto____$1,entry__4035__auto__);
}
});
ants_cljs.core.cell.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4041__auto__){var self__ = this;
var this__4041__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"food","food",1017053136),self__.food],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pher","pher",1017344023),self__.pher],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ant","ant",1014000985),self__.ant],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"home","home",1017112657),self__.home],null))], null),self__.__extmap));
});
ants_cljs.core.cell.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4033__auto__){var self__ = this;
var this__4033__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
ants_cljs.core.cell.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4025__auto__,other__4026__auto__){var self__ = this;
var this__4025__auto____$1 = this;if(cljs.core.truth_((function (){var and__3431__auto__ = other__4026__auto__;if(cljs.core.truth_(and__3431__auto__))
{return ((this__4025__auto____$1.constructor === other__4026__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4025__auto____$1,other__4026__auto__));
} else
{return and__3431__auto__;
}
})()))
{return true;
} else
{return false;
}
});
ants_cljs.core.cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4028__auto__,G__17406){var self__ = this;
var this__4028__auto____$1 = this;return (new ants_cljs.core.cell(self__.food,self__.pher,self__.ant,self__.home,G__17406,self__.__extmap,self__.__hash));
});
ants_cljs.core.cell.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4023__auto__){var self__ = this;
var this__4023__auto____$1 = this;return (new ants_cljs.core.cell(self__.food,self__.pher,self__.ant,self__.home,self__.__meta,self__.__extmap,self__.__hash));
});
ants_cljs.core.cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4027__auto__){var self__ = this;
var this__4027__auto____$1 = this;return self__.__meta;
});
ants_cljs.core.cell.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4038__auto__,k__4039__auto__){var self__ = this;
var this__4038__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pher","pher",1017344023),null,new cljs.core.Keyword(null,"food","food",1017053136),null,new cljs.core.Keyword(null,"home","home",1017112657),null,new cljs.core.Keyword(null,"ant","ant",1014000985),null], null), null),k__4039__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4038__auto____$1),self__.__meta),k__4039__auto__);
} else
{return (new ants_cljs.core.cell(self__.food,self__.pher,self__.ant,self__.home,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4039__auto__)),null));
}
});
ants_cljs.core.cell.cljs$lang$type = true;
ants_cljs.core.cell.cljs$lang$ctorPrSeq = (function (this__4063__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ants-cljs.core/cell");
});
ants_cljs.core.cell.cljs$lang$ctorPrWriter = (function (this__4063__auto__,writer__4064__auto__){return cljs.core._write.call(null,writer__4064__auto__,"ants-cljs.core/cell");
});
ants_cljs.core.__GT_cell = (function __GT_cell(food,pher,ant,home){return (new ants_cljs.core.cell(food,pher,ant,home));
});
ants_cljs.core.map__GT_cell = (function map__GT_cell(G__17408){return (new ants_cljs.core.cell(new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(G__17408),new cljs.core.Keyword(null,"pher","pher",1017344023).cljs$core$IFn$_invoke$arity$1(G__17408),new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(G__17408),new cljs.core.Keyword(null,"home","home",1017112657).cljs$core$IFn$_invoke$arity$1(G__17408),null,cljs.core.dissoc.call(null,G__17408,new cljs.core.Keyword(null,"food","food",1017053136),new cljs.core.Keyword(null,"pher","pher",1017344023),new cljs.core.Keyword(null,"ant","ant",1014000985),new cljs.core.Keyword(null,"home","home",1017112657))));
});
ants_cljs.core.world = cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (_){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (___$1){return cljs.core.atom.call(null,(new ants_cljs.core.cell(0,0,null,null)));
}),cljs.core.range.call(null,ants_cljs.core.dim)));
}),cljs.core.range.call(null,ants_cljs.core.dim)));
ants_cljs.core.place = (function place(p__17412){var vec__17414 = p__17412;var x = cljs.core.nth.call(null,vec__17414,0,null);var y = cljs.core.nth.call(null,vec__17414,1,null);if(!((new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null) == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-1640531407,null),new cljs.core.Symbol(null,"y","y",-1640531406,null)], null)))))].join('')));
}
var _PERCENT_ = cljs.core.nth.call(null,cljs.core.nth.call(null,ants_cljs.core.world,x),y);if(!((_PERCENT_ == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"%","%",-1640531490,null)))))].join('')));
}
return _PERCENT_;
});

/**
* @constructor
* @param {*} dir
* @param {*} id
* @param {*} food
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
ants_cljs.core.ant = (function (dir,id,food,__meta,__extmap){
this.dir = dir;
this.id = id;
this.food = food;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
ants_cljs.core.ant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4024__auto__){var self__ = this;
var this__4024__auto____$1 = this;var h__3854__auto__ = self__.__hash;if(!((h__3854__auto__ == null)))
{return h__3854__auto__;
} else
{var h__3854__auto____$1 = cljs.core.hash_imap.call(null,this__4024__auto____$1);self__.__hash = h__3854__auto____$1;
return h__3854__auto____$1;
}
});
ants_cljs.core.ant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4029__auto__,k__4030__auto__){var self__ = this;
var this__4029__auto____$1 = this;return cljs.core._lookup.call(null,this__4029__auto____$1,k__4030__auto__,null);
});
ants_cljs.core.ant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4031__auto__,k17416,else__4032__auto__){var self__ = this;
var this__4031__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k17416,new cljs.core.Keyword(null,"dir","dir",1014003711)))
{return self__.dir;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k17416,new cljs.core.Keyword(null,"id","id",1013907597)))
{return self__.id;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k17416,new cljs.core.Keyword(null,"food","food",1017053136)))
{return self__.food;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k17416,else__4032__auto__);
} else
{return null;
}
}
}
}
});
ants_cljs.core.ant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4036__auto__,k__4037__auto__,G__17415){var self__ = this;
var this__4036__auto____$1 = this;var pred__17418 = cljs.core.keyword_identical_QMARK_;var expr__17419 = k__4037__auto__;if(cljs.core.truth_(pred__17418.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711),expr__17419)))
{return (new ants_cljs.core.ant(G__17415,self__.id,self__.food,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17418.call(null,new cljs.core.Keyword(null,"id","id",1013907597),expr__17419)))
{return (new ants_cljs.core.ant(self__.dir,G__17415,self__.food,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17418.call(null,new cljs.core.Keyword(null,"food","food",1017053136),expr__17419)))
{return (new ants_cljs.core.ant(self__.dir,self__.id,G__17415,self__.__meta,self__.__extmap,null));
} else
{return (new ants_cljs.core.ant(self__.dir,self__.id,self__.food,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4037__auto__,G__17415),null));
}
}
}
});
ants_cljs.core.ant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4043__auto__,writer__4044__auto__,opts__4045__auto__){var self__ = this;
var this__4043__auto____$1 = this;var pr_pair__4046__auto__ = (function (keyval__4047__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4044__auto__,cljs.core.pr_writer,""," ","",opts__4045__auto__,keyval__4047__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__4044__auto__,pr_pair__4046__auto__,"#ants-cljs.core.ant{",", ","}",opts__4045__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dir","dir",1014003711),self__.dir],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",1013907597),self__.id],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"food","food",1017053136),self__.food],null))], null),self__.__extmap));
});
ants_cljs.core.ant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4034__auto__,entry__4035__auto__){var self__ = this;
var this__4034__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4035__auto__))
{return cljs.core._assoc.call(null,this__4034__auto____$1,cljs.core._nth.call(null,entry__4035__auto__,0),cljs.core._nth.call(null,entry__4035__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4034__auto____$1,entry__4035__auto__);
}
});
ants_cljs.core.ant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4041__auto__){var self__ = this;
var this__4041__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dir","dir",1014003711),self__.dir],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",1013907597),self__.id],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"food","food",1017053136),self__.food],null))], null),self__.__extmap));
});
ants_cljs.core.ant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4033__auto__){var self__ = this;
var this__4033__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
ants_cljs.core.ant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4025__auto__,other__4026__auto__){var self__ = this;
var this__4025__auto____$1 = this;if(cljs.core.truth_((function (){var and__3431__auto__ = other__4026__auto__;if(cljs.core.truth_(and__3431__auto__))
{return ((this__4025__auto____$1.constructor === other__4026__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4025__auto____$1,other__4026__auto__));
} else
{return and__3431__auto__;
}
})()))
{return true;
} else
{return false;
}
});
ants_cljs.core.ant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4028__auto__,G__17415){var self__ = this;
var this__4028__auto____$1 = this;return (new ants_cljs.core.ant(self__.dir,self__.id,self__.food,G__17415,self__.__extmap,self__.__hash));
});
ants_cljs.core.ant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4023__auto__){var self__ = this;
var this__4023__auto____$1 = this;return (new ants_cljs.core.ant(self__.dir,self__.id,self__.food,self__.__meta,self__.__extmap,self__.__hash));
});
ants_cljs.core.ant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4027__auto__){var self__ = this;
var this__4027__auto____$1 = this;return self__.__meta;
});
ants_cljs.core.ant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4038__auto__,k__4039__auto__){var self__ = this;
var this__4038__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"food","food",1017053136),null,new cljs.core.Keyword(null,"dir","dir",1014003711),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),k__4039__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4038__auto____$1),self__.__meta),k__4039__auto__);
} else
{return (new ants_cljs.core.ant(self__.dir,self__.id,self__.food,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4039__auto__)),null));
}
});
ants_cljs.core.ant.cljs$lang$type = true;
ants_cljs.core.ant.cljs$lang$ctorPrSeq = (function (this__4063__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ants-cljs.core/ant");
});
ants_cljs.core.ant.cljs$lang$ctorPrWriter = (function (this__4063__auto__,writer__4064__auto__){return cljs.core._write.call(null,writer__4064__auto__,"ants-cljs.core/ant");
});
ants_cljs.core.__GT_ant = (function __GT_ant(dir,id,food){return (new ants_cljs.core.ant(dir,id,food));
});
ants_cljs.core.map__GT_ant = (function map__GT_ant(G__17417){return (new ants_cljs.core.ant(new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(G__17417),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(G__17417),new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(G__17417),null,cljs.core.dissoc.call(null,G__17417,new cljs.core.Keyword(null,"dir","dir",1014003711),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"food","food",1017053136))));
});
/**
* create an ant at the location, returning an ant agent on the location
*/
ants_cljs.core.create_ant = (function create_ant(loc,dir,id){var p = ants_cljs.core.place.call(null,loc);var a = (new ants_cljs.core.ant(dir,id,null));cljs.core.swap_BANG_.call(null,p,cljs.core.assoc,new cljs.core.Keyword(null,"ant","ant",1014000985),a);
ants_cljs.core.logj.call(null,"create-ant",[cljs.core.str("created ant: "),cljs.core.str(a),cljs.core.str(" at "),cljs.core.str(loc)].join(''));
return loc;
});
ants_cljs.core.pprint_map = (function pprint_map(cljs_map){var result = cljs.core.reduce.call(null,(function (lhs,p__17423){var vec__17424 = p__17423;var k = cljs.core.nth.call(null,vec__17424,0,null);var v = cljs.core.nth.call(null,vec__17424,1,null);return [cljs.core.str(lhs),cljs.core.str(" "),cljs.core.str(k),cljs.core.str(" "),cljs.core.str(v)].join('');
}),"",cljs_map);return [cljs.core.str("{"),cljs.core.str(result),cljs.core.str("}")].join('');
});
ants_cljs.core.pprint_vec = (function pprint_vec(cljs_vec){var result = cljs.core.reduce.call(null,(function (lhs,v){return [cljs.core.str(lhs),cljs.core.str(" "),cljs.core.str(v)].join('');
}),"",cljs_vec);return [cljs.core.str("["),cljs.core.str(result),cljs.core.str("]")].join('');
});
ants_cljs.core.pprint = (function pprint(cljs_obj){var type_name = cljs.core.type__GT_str.call(null,cljs.core.type.call(null,cljs_obj));var G__17426 = type_name;if(cljs.core._EQ_.call(null,"cljs.core/PersistentVector",G__17426))
{return ants_cljs.core.pprint_vec.call(null,cljs_obj);
} else
{if(cljs.core._EQ_.call(null,"cljs.core/PersistentArrayMap",G__17426))
{return ants_cljs.core.pprint_map.call(null,cljs_obj);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return ants_cljs.core.logj.call(null,"pprint",[cljs.core.str("no pprint handler for "),cljs.core.str(type_name)].join(''));
} else
{return null;
}
}
}
});
ants_cljs.core.pprint_ant_record = (function pprint_ant_record(ant_rec){return [cljs.core.str("[ :dir "),cljs.core.str(new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(ant_rec)),cljs.core.str(" :id "),cljs.core.str(new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(ant_rec)),cljs.core.str(" :food "),cljs.core.str(new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(ant_rec)),cljs.core.str("]")].join('');
});
ants_cljs.core.pprint_cell_record = (function pprint_cell_record(cell_rec){return [cljs.core.str("[ :food "),cljs.core.str(new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(cell_rec)),cljs.core.str(" :pher "),cljs.core.str(new cljs.core.Keyword(null,"pher","pher",1017344023).cljs$core$IFn$_invoke$arity$1(cell_rec)),cljs.core.str(" :ant "),cljs.core.str(new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cell_rec)),cljs.core.str("]")].join('');
});
ants_cljs.core.home_off = (ants_cljs.core.dim / 4);
ants_cljs.core.home_range = cljs.core.range.call(null,ants_cljs.core.home_off,(ants_cljs.core.nants_sqrt + ants_cljs.core.home_off));
/**
* get coordinates of the locations of the ants from the main map
*/
ants_cljs.core.get_ant_coords = (function get_ant_coords(){return cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,(function (coord){if(cljs.core.truth_(new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ants_cljs.core.place.call(null,coord)))))
{return coord;
} else
{return null;
}
}),(function (){var iter__4160__auto__ = (function iter__17433(s__17434){return (new cljs.core.LazySeq(null,(function (){var s__17434__$1 = s__17434;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17434__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var y = cljs.core.first.call(null,xs__4579__auto__);var iterys__4156__auto__ = ((function (s__17434__$1,y,xs__4579__auto__,temp__4092__auto__){
return (function iter__17435(s__17436){return (new cljs.core.LazySeq(null,((function (s__17434__$1,y,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__17436__$1 = s__17436;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__17436__$1);if(temp__4092__auto____$1)
{var s__17436__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17436__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__17436__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__17438 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__17437 = 0;while(true){
if((i__17437 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__17437);cljs.core.chunk_append.call(null,b__17438,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
{
var G__17439 = (i__17437 + 1);
i__17437 = G__17439;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17438),iter__17435.call(null,cljs.core.chunk_rest.call(null,s__17436__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17438),null);
}
} else
{var x = cljs.core.first.call(null,s__17436__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),iter__17435.call(null,cljs.core.rest.call(null,s__17436__$2)));
}
} else
{return null;
}
break;
}
});})(s__17434__$1,y,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__17434__$1,y,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,cljs.core.range.call(null,ants_cljs.core.dim)));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__17433.call(null,cljs.core.rest.call(null,s__17434__$1)));
} else
{{
var G__17440 = cljs.core.rest.call(null,s__17434__$1);
s__17434__$1 = G__17440;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,cljs.core.range.call(null,ants_cljs.core.dim));
})()));
});
/**
* return an integer for the food the ant has at a coord
*/
ants_cljs.core.ant_food_count = (function ant_food_count(coord){var ant_atom = ants_cljs.core.place.call(null,coord);var ant = cljs.core.deref.call(null,ant_atom);ants_cljs.core.logj.call(null,"count",[cljs.core.str("food count ant: "),cljs.core.str(new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(ant))].join(''));
if(!(cljs.core._EQ_.call(null,0,new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(ant))))
{ants_cljs.core.logj.call(null,"count",ants_cljs.core.pprint_ant_record.call(null,ant));
ants_cljs.core.logj.call(null,"count","ant has food");
return 1;
} else
{return 0;
}
});
/**
* get a count of the ants with food
*/
ants_cljs.core.get_ant_food_count = (function get_ant_food_count(){var ant_coords = ants_cljs.core.get_ant_coords.call(null);var map_result = cljs.core.map.call(null,ants_cljs.core.ant_food_count,ant_coords);ants_cljs.core.logj.call(null,"count","map-result ",map_result);
return cljs.core.reduce.call(null,cljs.core._PLUS_,map_result);
});
/**
* places initial food and ants, returns seq of ant agents
*/
ants_cljs.core.setup = (function setup(){var n__4291__auto___17453 = ants_cljs.core.food_places;var i_17454 = 0;while(true){
if((i_17454 < n__4291__auto___17453))
{var p_17455 = ants_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,ants_cljs.core.dim),cljs.core.rand_int.call(null,ants_cljs.core.dim)], null));cljs.core.swap_BANG_.call(null,p_17455,cljs.core.assoc,new cljs.core.Keyword(null,"food","food",1017053136),cljs.core.rand_int.call(null,ants_cljs.core.food_range));
{
var G__17456 = (i_17454 + 1);
i_17454 = G__17456;
continue;
}
} else
{}
break;
}
return cljs.core.doall.call(null,(function (){var iter__4160__auto__ = (function iter__17447(s__17448){return (new cljs.core.LazySeq(null,(function (){var s__17448__$1 = s__17448;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17448__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__4156__auto__ = ((function (s__17448__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__17449(s__17450){return (new cljs.core.LazySeq(null,((function (s__17448__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__17450__$1 = s__17450;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__17450__$1);if(temp__4092__auto____$1)
{var s__17450__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17450__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__17450__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__17452 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__17451 = 0;while(true){
if((i__17451 < size__4159__auto__))
{var y = cljs.core._nth.call(null,c__4158__auto__,i__17451);cljs.core.chunk_append.call(null,b__17452,(function (){cljs.core.swap_BANG_.call(null,ants_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),cljs.core.assoc,new cljs.core.Keyword(null,"home","home",1017112657),true);
ants_cljs.core.logj.call(null,"setup","setup - creating ant at ",x,y);
ants_cljs.core.create_ant.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.rand_int.call(null,8),[cljs.core.str(x),cljs.core.str("-"),cljs.core.str(y)].join(''));
return ants_cljs.core.logj.call(null,"setup",ants_cljs.core.get_ant_coords.call(null));
})());
{
var G__17457 = (i__17451 + 1);
i__17451 = G__17457;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17452),iter__17449.call(null,cljs.core.chunk_rest.call(null,s__17450__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17452),null);
}
} else
{var y = cljs.core.first.call(null,s__17450__$2);return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,ants_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),cljs.core.assoc,new cljs.core.Keyword(null,"home","home",1017112657),true);
ants_cljs.core.logj.call(null,"setup","setup - creating ant at ",x,y);
ants_cljs.core.create_ant.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.rand_int.call(null,8),[cljs.core.str(x),cljs.core.str("-"),cljs.core.str(y)].join(''));
return ants_cljs.core.logj.call(null,"setup",ants_cljs.core.get_ant_coords.call(null));
})(),iter__17449.call(null,cljs.core.rest.call(null,s__17450__$2)));
}
} else
{return null;
}
break;
}
});})(s__17448__$1,x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__17448__$1,x,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,ants_cljs.core.home_range));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__17447.call(null,cljs.core.rest.call(null,s__17448__$1)));
} else
{{
var G__17458 = cljs.core.rest.call(null,s__17448__$1);
s__17448__$1 = G__17458;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,ants_cljs.core.home_range);
})());
});
ants_cljs.core.setup.call(null);
/**
* returns n wrapped into range 0-b
*/
ants_cljs.core.bound = (function bound(b,n){var n__$1 = cljs.core.rem.call(null,n,b);if((n__$1 < 0))
{return (n__$1 + b);
} else
{return n__$1;
}
});
/**
* given a vector of slice sizes, returns the index of a slice given a
* random spin of a roulette wheel with compartments proportional to
* slices.
*/
ants_cljs.core.wrand = (function wrand(slices){var total = cljs.core.reduce.call(null,cljs.core._PLUS_,slices);var r = cljs.core.rand.call(null,total);var result = (function (){var i = 0;var sum = 0;while(true){
if((r < (slices.call(null,i) + sum)))
{return i;
} else
{{
var G__17459 = (i + 1);
var G__17460 = (slices.call(null,i) + sum);
i = G__17459;
sum = G__17460;
continue;
}
}
break;
}
})();return result;
});
ants_cljs.core.dir_delta = new cljs.core.PersistentArrayMap(null, 8, [0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-1], null),1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,-1], null),2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null),3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1], null),4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null),5,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,1], null),6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,0], null),7,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,-1], null)], null);
/**
* returns the location one step in the given dir. Note the world is a torus
*/
ants_cljs.core.delta_loc = (function delta_loc(p__17461,dir){var vec__17464 = p__17461;var x = cljs.core.nth.call(null,vec__17464,0,null);var y = cljs.core.nth.call(null,vec__17464,1,null);var vec__17465 = ants_cljs.core.dir_delta.call(null,ants_cljs.core.bound.call(null,8,dir));var dx = cljs.core.nth.call(null,vec__17465,0,null);var dy = cljs.core.nth.call(null,vec__17465,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ants_cljs.core.bound.call(null,ants_cljs.core.dim,(x + dx)),ants_cljs.core.bound.call(null,ants_cljs.core.dim,(y + dy))], null);
});
/**
* turns the ant at the location by the given amount
*/
ants_cljs.core.turn = (function turn(loc,amt){var p_17466 = ants_cljs.core.place.call(null,loc);var ant_17467 = new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p_17466));ants_cljs.core.logj.call(null,"turn","ant: ",ant_17467);
if((ant_17467 == null))
{ants_cljs.core.logj.call(null,"turn","error: no ant at this location");
throw (new Error("turn - no ant at this location"));
ants_cljs.core.do_pause.call(null);
} else
{}
ants_cljs.core.logj.call(null,"turn","location before turn: ",p_17466);
cljs.core.swap_BANG_.call(null,p_17466,cljs.core.assoc,new cljs.core.Keyword(null,"ant","ant",1014000985),cljs.core.assoc.call(null,ant_17467,new cljs.core.Keyword(null,"dir","dir",1014003711),ants_cljs.core.bound.call(null,8,(new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(ant_17467) + amt))));
ants_cljs.core.logj.call(null,"turn","location after turn: ",p_17466);
return loc;
});
/**
* ensure the actual number of ants is the number expected
*/
ants_cljs.core.validate_expected_ants_count = (function validate_expected_ants_count(){var validated = cljs.core._EQ_.call(null,(ants_cljs.core.nants_sqrt * ants_cljs.core.nants_sqrt),cljs.core.count.call(null,ants_cljs.core.get_ant_coords.call(null)));return validated;
});
ants_cljs.core.move_check_preconditions = (function move_check_preconditions(oldp,ant,p){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [!((oldp == null)),!((ant == null)),!((p == null)),!((new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p)) == null))], null)], null);
});
/**
* moves the ant in the direction it is heading. Must be called in a
* transaction that has verified the way is clear
*/
ants_cljs.core.move = (function move(coord){if(ants_cljs.core.validate_expected_ants_count.call(null))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-expected-ants-count","validate-expected-ants-count",-439417819,null))))].join('')));
}
var _PERCENT_ = (function (){var oldp = ants_cljs.core.place.call(null,coord);var ant = new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,oldp));var newloc = ants_cljs.core.delta_loc.call(null,coord,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(ant));var p = ants_cljs.core.place.call(null,newloc);ants_cljs.core.logj.call(null,"move","move: ",coord," to ",newloc);
ants_cljs.core.move_check_preconditions.call(null,oldp,ant,p);
if(!((new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p)) == null)))
{ants_cljs.core.logj.call(null,"move","already ant in new location!");
return coord;
} else
{cljs.core.swap_BANG_.call(null,p,cljs.core.assoc,new cljs.core.Keyword(null,"ant","ant",1014000985),ant);
if(!((new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p)) == null)))
{cljs.core.swap_BANG_.call(null,oldp,cljs.core.dissoc,new cljs.core.Keyword(null,"ant","ant",1014000985));
if(cljs.core.truth_(new cljs.core.Keyword(null,"home","home",1017112657).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,oldp))))
{} else
{if(cljs.core.truth_(new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(ant)))
{cljs.core.swap_BANG_.call(null,oldp,cljs.core.assoc,new cljs.core.Keyword(null,"pher","pher",1017344023),(new cljs.core.Keyword(null,"pher","pher",1017344023).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,oldp)) + 1));
} else
{}
}
ants_cljs.core.logj.call(null,"move",[cljs.core.str("moving: "),cljs.core.str(ants_cljs.core.get_ant_coords.call(null))].join(''));
return newloc;
} else
{return null;
}
}
})();if(ants_cljs.core.validate_expected_ants_count.call(null))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-expected-ants-count","validate-expected-ants-count",-439417819,null))))].join('')));
}
return _PERCENT_;
});
ants_cljs.core.take_food = (function take_food(loc){var p = ants_cljs.core.place.call(null,loc);var ant = new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p));ants_cljs.core.logj.call(null,"take-food","take-food - did I go red? ",loc);
cljs.core.swap_BANG_.call(null,p,cljs.core.assoc,new cljs.core.Keyword(null,"food","food",1017053136),(new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p)) - 1),new cljs.core.Keyword(null,"ant","ant",1014000985),cljs.core.assoc.call(null,ant,new cljs.core.Keyword(null,"food","food",1017053136),true));
return loc;
});
ants_cljs.core.drop_food = (function drop_food(loc){var p = ants_cljs.core.place.call(null,loc);var ant = new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p));ants_cljs.core.logj.call(null,"drop-food","dropping food at: ",loc," food before",new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p)),ant);
ants_cljs.core.logj.call(null,"drop-food","place before ",p);
cljs.core.swap_BANG_.call(null,p,cljs.core.assoc,new cljs.core.Keyword(null,"food","food",1017053136),(new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p)) + 1),new cljs.core.Keyword(null,"ant","ant",1014000985),cljs.core.dissoc.call(null,ant,new cljs.core.Keyword(null,"food","food",1017053136)));
ants_cljs.core.logj.call(null,"drop-food","place after ",p);
ants_cljs.core.logj.call(null,"drop-food","ant dissoc food: ",cljs.core.dissoc.call(null,ant,new cljs.core.Keyword(null,"food","food",1017053136)));
ants_cljs.core.logj.call(null,"drop-food","dropping food at: ",loc," food after",new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p)),ant);
return loc;
});
/**
* returns a map of xs to their 1-based rank when sorted by keyfn
*/
ants_cljs.core.rank_by = (function rank_by(keyfn,xs){var sorted = cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs.core.float$,keyfn),xs);return cljs.core.reduce.call(null,(function (ret,i){return cljs.core.assoc.call(null,ret,cljs.core.nth.call(null,sorted,i),(i + 1));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.call(null,cljs.core.count.call(null,sorted)));
});
/**
* the main function for the ant agent
*/
ants_cljs.core.behave = (function behave(coord){var p = ants_cljs.core.place.call(null,coord);var ant = new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p));var ahead = ants_cljs.core.place.call(null,ants_cljs.core.delta_loc.call(null,coord,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(ant)));var ahead_left = ants_cljs.core.place.call(null,ants_cljs.core.delta_loc.call(null,coord,(new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(ant) - 1)));var ahead_right = ants_cljs.core.place.call(null,ants_cljs.core.delta_loc.call(null,coord,(new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(ant) + 1)));var places = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ahead,ahead_left,ahead_right], null);ants_cljs.core.logj.call(null,"behave","behave: ",ant);
if(cljs.core.truth_(new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(ant)))
{if(cljs.core.truth_(new cljs.core.Keyword(null,"home","home",1017112657).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p))))
{ants_cljs.core.logj.call(null,"behave","has food - at home - dropping food");
return ants_cljs.core.turn.call(null,ants_cljs.core.drop_food.call(null,coord),4);
} else
{if(cljs.core.truth_((function (){var and__3431__auto__ = new cljs.core.Keyword(null,"home","home",1017112657).cljs$core$IFn$_invoke$arity$1(ahead);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(ahead));
} else
{return and__3431__auto__;
}
})()))
{ants_cljs.core.logj.call(null,"behave","has food - home ahead and no ant");
return ants_cljs.core.move.call(null,coord);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var ranks = cljs.core.merge_with.call(null,cljs.core._PLUS_,ants_cljs.core.rank_by.call(null,cljs.core.comp.call(null,(function (p1__17468_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"home","home",1017112657).cljs$core$IFn$_invoke$arity$1(p1__17468_SHARP_)))
{return 1;
} else
{return 0;
}
}),cljs.core.deref),places),ants_cljs.core.rank_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"pher","pher",1017344023),cljs.core.deref),places));new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__17469_SHARP_){return ants_cljs.core.turn.call(null,p1__17469_SHARP_,0);
}),(function (p1__17470_SHARP_){return ants_cljs.core.turn.call(null,p1__17470_SHARP_,-1);
}),(function (p1__17471_SHARP_){return ants_cljs.core.turn.call(null,p1__17471_SHARP_,1);
})], null).call(null,ants_cljs.core.wrand.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ahead)))?0:ranks.call(null,ahead)),ranks.call(null,ahead_left),ranks.call(null,ahead_right)], null))).call(null,coord);
return ants_cljs.core.move.call(null,coord);
} else
{return null;
}
}
}
} else
{if(((new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p)) > 0)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"home","home",1017112657).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p)))) && (!((new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(ant) > 0))))
{return ants_cljs.core.turn.call(null,ants_cljs.core.take_food.call(null,coord),4);
} else
{if(((new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ahead)) > 0)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"home","home",1017112657).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ahead)))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ahead)))))
{return ants_cljs.core.move.call(null,coord);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var ranks = cljs.core.merge_with.call(null,cljs.core._PLUS_,ants_cljs.core.rank_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"food","food",1017053136),cljs.core.deref),places),ants_cljs.core.rank_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"pher","pher",1017344023),cljs.core.deref),places));ants_cljs.core.move_vec = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ants_cljs.core.move,(function (p1__17472_SHARP_){return ants_cljs.core.turn.call(null,p1__17472_SHARP_,-1);
}),(function (p1__17473_SHARP_){return ants_cljs.core.turn.call(null,p1__17473_SHARP_,1);
})], null);
ants_cljs.core.wrand_func = ants_cljs.core.wrand.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ahead)))?0:ranks.call(null,ahead)),ranks.call(null,ahead_left),ranks.call(null,ahead_right)], null));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__17474_SHARP_){return ants_cljs.core.turn.call(null,p1__17474_SHARP_,0);
}),(function (p1__17475_SHARP_){return ants_cljs.core.turn.call(null,p1__17475_SHARP_,-1);
}),(function (p1__17476_SHARP_){return ants_cljs.core.turn.call(null,p1__17476_SHARP_,1);
})], null).call(null,ants_cljs.core.wrand_func).call(null,coord);
return ants_cljs.core.move.call(null,coord);
} else
{return null;
}
}
}
}
});
/**
* causes all the pheromones to evaporate a bit
*/
ants_cljs.core.evaporate = (function evaporate(){return cljs.core.dorun.call(null,(function (){var iter__4160__auto__ = (function iter__17483(s__17484){return (new cljs.core.LazySeq(null,(function (){var s__17484__$1 = s__17484;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17484__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__4156__auto__ = ((function (s__17484__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__17485(s__17486){return (new cljs.core.LazySeq(null,((function (s__17484__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__17486__$1 = s__17486;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__17486__$1);if(temp__4092__auto____$1)
{var s__17486__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17486__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__17486__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__17488 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__17487 = 0;while(true){
if((i__17487 < size__4159__auto__))
{var y = cljs.core._nth.call(null,c__4158__auto__,i__17487);cljs.core.chunk_append.call(null,b__17488,(function (){var p = ants_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));return cljs.core.swap_BANG_.call(null,p,cljs.core.assoc,new cljs.core.Keyword(null,"pher","pher",1017344023),(ants_cljs.core.evap_rate * new cljs.core.Keyword(null,"pher","pher",1017344023).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p))));
})());
{
var G__17489 = (i__17487 + 1);
i__17487 = G__17489;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17488),iter__17485.call(null,cljs.core.chunk_rest.call(null,s__17486__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17488),null);
}
} else
{var y = cljs.core.first.call(null,s__17486__$2);return cljs.core.cons.call(null,(function (){var p = ants_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));return cljs.core.swap_BANG_.call(null,p,cljs.core.assoc,new cljs.core.Keyword(null,"pher","pher",1017344023),(ants_cljs.core.evap_rate * new cljs.core.Keyword(null,"pher","pher",1017344023).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p))));
})(),iter__17485.call(null,cljs.core.rest.call(null,s__17486__$2)));
}
} else
{return null;
}
break;
}
});})(s__17484__$1,x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__17484__$1,x,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,cljs.core.range.call(null,ants_cljs.core.dim)));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__17483.call(null,cljs.core.rest.call(null,s__17484__$1)));
} else
{{
var G__17490 = cljs.core.rest.call(null,s__17484__$1);
s__17484__$1 = G__17490;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,cljs.core.range.call(null,ants_cljs.core.dim));
})());
});
ants_cljs.core.scale = 5;
ants_cljs.core.fill_cell = (function fill_cell(ctx,x,y,colour){var G__17492_17493 = ctx;G__17492_17493.beginPath();
G__17492_17493.rect((x * ants_cljs.core.scale),(y * ants_cljs.core.scale),ants_cljs.core.scale,ants_cljs.core.scale);
ctx.fillStyle = colour;
return ctx.fill();
});
ants_cljs.core.render_ant = (function render_ant(ant,ctx,x,y){var vec__17496 = new cljs.core.PersistentArrayMap(null, 8, [0,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,0,2,4], null),1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [4,0,0,4], null),2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [4,2,0,2], null),3,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [4,4,0,0], null),4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,4,2,0], null),5,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,4,4,0], null),6,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,2,4,2], null),7,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,4,4], null)], null).call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(ant));var hx = cljs.core.nth.call(null,vec__17496,0,null);var hy = cljs.core.nth.call(null,vec__17496,1,null);var tx = cljs.core.nth.call(null,vec__17496,2,null);var ty = cljs.core.nth.call(null,vec__17496,3,null);ctx.beginPath();
if((!((new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(ant) == null))) && (!(cljs.core._EQ_.call(null,0,new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(ant)))))
{ctx.strokeStyle = "#ff0000";
ants_cljs.core.logj.call(null,"render-ant","drawing red");
} else
{ctx.strokeStyle = "black";
}
var G__17497 = ctx;G__17497.moveTo((hx + (x * ants_cljs.core.scale)),(hy + (y * ants_cljs.core.scale)));
G__17497.lineTo((tx + (x * ants_cljs.core.scale)),(ty + (y * ants_cljs.core.scale)));
G__17497.stroke();
return G__17497;
});
ants_cljs.core.render_place = (function render_place(ctx,p,x,y){if((new cljs.core.Keyword(null,"pher","pher",1017344023).cljs$core$IFn$_invoke$arity$1(p) > 0))
{ants_cljs.core.fill_cell.call(null,ctx,x,y,[cljs.core.str("rgba(0,255,0,"),cljs.core.str((function (){var x__3757__auto__ = 1;var y__3758__auto__ = (new cljs.core.Keyword(null,"pher","pher",1017344023).cljs$core$IFn$_invoke$arity$1(p) / ants_cljs.core.pher_scale);return ((x__3757__auto__ < y__3758__auto__) ? x__3757__auto__ : y__3758__auto__);
})()),cljs.core.str(")")].join(''));
} else
{}
if((new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(p) > 0))
{ants_cljs.core.fill_cell.call(null,ctx,x,y,[cljs.core.str("rgba(255,0,0,"),cljs.core.str((function (){var x__3757__auto__ = 1;var y__3758__auto__ = (new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(p) / ants_cljs.core.food_scale);return ((x__3757__auto__ < y__3758__auto__) ? x__3757__auto__ : y__3758__auto__);
})()),cljs.core.str(")")].join(''));
} else
{}
if(cljs.core.truth_(new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(p)))
{return ants_cljs.core.render_ant.call(null,new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(p),ctx,x,y);
} else
{return null;
}
});
ants_cljs.core.setup_context = (function setup_context(ctx){ctx.width = (ants_cljs.core.dim * ants_cljs.core.scale);
ctx.height = (ants_cljs.core.dim * ants_cljs.core.scale);
var G__17499_17500 = ctx;G__17499_17500.beginPath();
G__17499_17500.rect(1,1,(ants_cljs.core.dim * ants_cljs.core.scale),(ants_cljs.core.dim * ants_cljs.core.scale));
ctx.fillStyle = "white";
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = "black";
return ctx.stroke();
});
ants_cljs.core.draw_outside_box = (function draw_outside_box(ctx){var G__17502_17503 = ctx;G__17502_17503.beginPath();
G__17502_17503.rect(1,1,(ants_cljs.core.dim * ants_cljs.core.scale),(ants_cljs.core.dim * ants_cljs.core.scale));
ctx.lineWidth = 1;
ctx.strokeStyle = "black";
return ctx.stroke();
});
ants_cljs.core.draw_home_box = (function draw_home_box(ctx){var G__17505_17506 = ctx;G__17505_17506.beginPath();
G__17505_17506.rect((ants_cljs.core.scale * ants_cljs.core.home_off),(ants_cljs.core.scale * ants_cljs.core.home_off),(ants_cljs.core.scale * ants_cljs.core.nants_sqrt),(ants_cljs.core.scale * ants_cljs.core.nants_sqrt));
ctx.lineWidth = 1;
ctx.strokeStyle = "blue";
return ctx.stroke();
});
ants_cljs.core.render = (function render(ctx){var v = cljs.core.apply.call(null,cljs.core.vector,(function (){var iter__4160__auto__ = (function iter__17519(s__17520){return (new cljs.core.LazySeq(null,(function (){var s__17520__$1 = s__17520;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17520__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__4156__auto__ = ((function (s__17520__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__17521(s__17522){return (new cljs.core.LazySeq(null,((function (s__17520__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__17522__$1 = s__17522;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__17522__$1);if(temp__4092__auto____$1)
{var s__17522__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17522__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__17522__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__17524 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__17523 = 0;while(true){
if((i__17523 < size__4159__auto__))
{var y = cljs.core._nth.call(null,c__4158__auto__,i__17523);cljs.core.chunk_append.call(null,b__17524,cljs.core.deref.call(null,ants_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))));
{
var G__17531 = (i__17523 + 1);
i__17523 = G__17531;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17524),iter__17521.call(null,cljs.core.chunk_rest.call(null,s__17522__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17524),null);
}
} else
{var y = cljs.core.first.call(null,s__17522__$2);return cljs.core.cons.call(null,cljs.core.deref.call(null,ants_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))),iter__17521.call(null,cljs.core.rest.call(null,s__17522__$2)));
}
} else
{return null;
}
break;
}
});})(s__17520__$1,x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__17520__$1,x,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,cljs.core.range.call(null,ants_cljs.core.dim)));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__17519.call(null,cljs.core.rest.call(null,s__17520__$1)));
} else
{{
var G__17532 = cljs.core.rest.call(null,s__17520__$1);
s__17520__$1 = G__17532;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,cljs.core.range.call(null,ants_cljs.core.dim));
})());ants_cljs.core.setup_context.call(null,ctx);
cljs.core.dorun.call(null,(function (){var iter__4160__auto__ = (function iter__17525(s__17526){return (new cljs.core.LazySeq(null,(function (){var s__17526__$1 = s__17526;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17526__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__4156__auto__ = ((function (s__17526__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__17527(s__17528){return (new cljs.core.LazySeq(null,((function (s__17526__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__17528__$1 = s__17528;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__17528__$1);if(temp__4092__auto____$1)
{var s__17528__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17528__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__17528__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__17530 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__17529 = 0;while(true){
if((i__17529 < size__4159__auto__))
{var y = cljs.core._nth.call(null,c__4158__auto__,i__17529);cljs.core.chunk_append.call(null,b__17530,ants_cljs.core.render_place.call(null,ctx,v.call(null,((x * ants_cljs.core.dim) + y)),x,y));
{
var G__17533 = (i__17529 + 1);
i__17529 = G__17533;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17530),iter__17527.call(null,cljs.core.chunk_rest.call(null,s__17528__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17530),null);
}
} else
{var y = cljs.core.first.call(null,s__17528__$2);return cljs.core.cons.call(null,ants_cljs.core.render_place.call(null,ctx,v.call(null,((x * ants_cljs.core.dim) + y)),x,y),iter__17527.call(null,cljs.core.rest.call(null,s__17528__$2)));
}
} else
{return null;
}
break;
}
});})(s__17526__$1,x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__17526__$1,x,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,cljs.core.range.call(null,ants_cljs.core.dim)));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__17525.call(null,cljs.core.rest.call(null,s__17526__$1)));
} else
{{
var G__17534 = cljs.core.rest.call(null,s__17526__$1);
s__17526__$1 = G__17534;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,cljs.core.range.call(null,ants_cljs.core.dim));
})());
ants_cljs.core.draw_outside_box.call(null,ctx);
return ants_cljs.core.draw_home_box.call(null,ctx);
});
/**
* Don't tell anyone this is actually just document.getElementById().
*/
ants_cljs.core.get_canvas = (function get_canvas(id){return document.getElementById(id);
});
ants_cljs.core.canvs = ants_cljs.core.get_canvas.call(null,"antcanvas");
ants_cljs.core.context = ants_cljs.core.canvs.getContext("2d");
ants_cljs.core.map_coords = (function map_coords(){var iter__4160__auto__ = (function iter__17541(s__17542){return (new cljs.core.LazySeq(null,(function (){var s__17542__$1 = s__17542;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17542__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var y = cljs.core.first.call(null,xs__4579__auto__);var iterys__4156__auto__ = ((function (s__17542__$1,y,xs__4579__auto__,temp__4092__auto__){
return (function iter__17543(s__17544){return (new cljs.core.LazySeq(null,((function (s__17542__$1,y,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__17544__$1 = s__17544;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__17544__$1);if(temp__4092__auto____$1)
{var s__17544__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17544__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__17544__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__17546 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__17545 = 0;while(true){
if((i__17545 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__17545);cljs.core.chunk_append.call(null,b__17546,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
{
var G__17547 = (i__17545 + 1);
i__17545 = G__17547;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17546),iter__17543.call(null,cljs.core.chunk_rest.call(null,s__17544__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17546),null);
}
} else
{var x = cljs.core.first.call(null,s__17544__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),iter__17543.call(null,cljs.core.rest.call(null,s__17544__$2)));
}
} else
{return null;
}
break;
}
});})(s__17542__$1,y,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__17542__$1,y,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,cljs.core.range.call(null,ants_cljs.core.dim)));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__17541.call(null,cljs.core.rest.call(null,s__17542__$1)));
} else
{{
var G__17548 = cljs.core.rest.call(null,s__17542__$1);
s__17542__$1 = G__17548;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,cljs.core.range.call(null,ants_cljs.core.dim));
});
ants_cljs.core.behave_ants = (function behave_ants(){var ant_coords = ants_cljs.core.get_ant_coords.call(null);ants_cljs.core.logj.call(null,"move",[cljs.core.str("get-ants-coords: "),cljs.core.str(ant_coords)].join(''));
ants_cljs.core.logj.call(null,"count",[cljs.core.str("get-ant-food-count "),cljs.core.str(ants_cljs.core.get_ant_food_count.call(null))].join(''));
return cljs.core.dorun.call(null,(function (){var iter__4160__auto__ = (function iter__17553(s__17554){return (new cljs.core.LazySeq(null,(function (){var s__17554__$1 = s__17554;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17554__$1);if(temp__4092__auto__)
{var s__17554__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17554__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__17554__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__17556 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__17555 = 0;while(true){
if((i__17555 < size__4159__auto__))
{var coord = cljs.core._nth.call(null,c__4158__auto__,i__17555);cljs.core.chunk_append.call(null,b__17556,(function (){var p_17557 = ants_cljs.core.place.call(null,coord);var ant_17558 = new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p_17557));if((p_17557 == null))
{ants_cljs.core.logj.call(null,"behave-ants","nil p in behave-ants");
throw (new Error("behave-ants - no p at this location"));
ants_cljs.core.do_pause.call(null);
} else
{}
if((ant_17558 == null))
{ants_cljs.core.logj.call(null,"behave-ants","nil ant in behave-ants");
throw (new Error("behave-ants - no ant at this location"));
ants_cljs.core.do_pause.call(null);
} else
{}
return ants_cljs.core.behave.call(null,coord);
})());
{
var G__17559 = (i__17555 + 1);
i__17555 = G__17559;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17556),iter__17553.call(null,cljs.core.chunk_rest.call(null,s__17554__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17556),null);
}
} else
{var coord = cljs.core.first.call(null,s__17554__$2);return cljs.core.cons.call(null,(function (){var p_17560 = ants_cljs.core.place.call(null,coord);var ant_17561 = new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p_17560));if((p_17560 == null))
{ants_cljs.core.logj.call(null,"behave-ants","nil p in behave-ants");
throw (new Error("behave-ants - no p at this location"));
ants_cljs.core.do_pause.call(null);
} else
{}
if((ant_17561 == null))
{ants_cljs.core.logj.call(null,"behave-ants","nil ant in behave-ants");
throw (new Error("behave-ants - no ant at this location"));
ants_cljs.core.do_pause.call(null);
} else
{}
return ants_cljs.core.behave.call(null,coord);
})(),iter__17553.call(null,cljs.core.rest.call(null,s__17554__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,ant_coords);
})());
});
ants_cljs.core.send_off_animation = (function send_off_animation(){return ants_cljs.core.render.call(null,ants_cljs.core.context);
});
ants_cljs.core.run_loop = (function run_loop(){ants_cljs.core.send_off_animation.call(null);
ants_cljs.core.behave_ants.call(null);
return ants_cljs.core.evaporate.call(null);
});
ants_cljs.core.animate = (function animate(){if(cljs.core.truth_(ants_cljs.core.is_running))
{window.requestAnimationFrame(animate);
} else
{}
return ants_cljs.core.run_loop.call(null);
});
ants_cljs.core.animate.call(null);
goog.events.listen(goog.dom.getElement("clickMe"),"click",(function (){ants_cljs.core.do_pause.call(null);
return ants_cljs.core.animate.call(null);
}));

//# sourceMappingURL=core.js.map