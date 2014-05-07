// Compiled by ClojureScript 0.0-2173
goog.provide('ants_cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
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
logj.cljs$lang$applyTo = (function (arglist__12670){
var flag = cljs.core.first(arglist__12670);
var args = cljs.core.rest(arglist__12670);
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
ants_cljs.core.cell.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4031__auto__,k12672,else__4032__auto__){var self__ = this;
var this__4031__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k12672,new cljs.core.Keyword(null,"food","food",1017053136)))
{return self__.food;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12672,new cljs.core.Keyword(null,"pher","pher",1017344023)))
{return self__.pher;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12672,new cljs.core.Keyword(null,"ant","ant",1014000985)))
{return self__.ant;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12672,new cljs.core.Keyword(null,"home","home",1017112657)))
{return self__.home;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k12672,else__4032__auto__);
} else
{return null;
}
}
}
}
}
});
ants_cljs.core.cell.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4036__auto__,k__4037__auto__,G__12671){var self__ = this;
var this__4036__auto____$1 = this;var pred__12674 = cljs.core.keyword_identical_QMARK_;var expr__12675 = k__4037__auto__;if(cljs.core.truth_(pred__12674.call(null,new cljs.core.Keyword(null,"food","food",1017053136),expr__12675)))
{return (new ants_cljs.core.cell(G__12671,self__.pher,self__.ant,self__.home,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12674.call(null,new cljs.core.Keyword(null,"pher","pher",1017344023),expr__12675)))
{return (new ants_cljs.core.cell(self__.food,G__12671,self__.ant,self__.home,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12674.call(null,new cljs.core.Keyword(null,"ant","ant",1014000985),expr__12675)))
{return (new ants_cljs.core.cell(self__.food,self__.pher,G__12671,self__.home,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12674.call(null,new cljs.core.Keyword(null,"home","home",1017112657),expr__12675)))
{return (new ants_cljs.core.cell(self__.food,self__.pher,self__.ant,G__12671,self__.__meta,self__.__extmap,null));
} else
{return (new ants_cljs.core.cell(self__.food,self__.pher,self__.ant,self__.home,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4037__auto__,G__12671),null));
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
ants_cljs.core.cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4028__auto__,G__12671){var self__ = this;
var this__4028__auto____$1 = this;return (new ants_cljs.core.cell(self__.food,self__.pher,self__.ant,self__.home,G__12671,self__.__extmap,self__.__hash));
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
ants_cljs.core.map__GT_cell = (function map__GT_cell(G__12673){return (new ants_cljs.core.cell(new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(G__12673),new cljs.core.Keyword(null,"pher","pher",1017344023).cljs$core$IFn$_invoke$arity$1(G__12673),new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(G__12673),new cljs.core.Keyword(null,"home","home",1017112657).cljs$core$IFn$_invoke$arity$1(G__12673),null,cljs.core.dissoc.call(null,G__12673,new cljs.core.Keyword(null,"food","food",1017053136),new cljs.core.Keyword(null,"pher","pher",1017344023),new cljs.core.Keyword(null,"ant","ant",1014000985),new cljs.core.Keyword(null,"home","home",1017112657))));
});
ants_cljs.core.world = cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (_){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (___$1){return cljs.core.atom.call(null,(new ants_cljs.core.cell(0,0,null,null)));
}),cljs.core.range.call(null,ants_cljs.core.dim)));
}),cljs.core.range.call(null,ants_cljs.core.dim)));
ants_cljs.core.place = (function place(p__12677){var vec__12679 = p__12677;var x = cljs.core.nth.call(null,vec__12679,0,null);var y = cljs.core.nth.call(null,vec__12679,1,null);if(!((new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null) == null)))
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
ants_cljs.core.ant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4031__auto__,k12681,else__4032__auto__){var self__ = this;
var this__4031__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k12681,new cljs.core.Keyword(null,"dir","dir",1014003711)))
{return self__.dir;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12681,new cljs.core.Keyword(null,"id","id",1013907597)))
{return self__.id;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12681,new cljs.core.Keyword(null,"food","food",1017053136)))
{return self__.food;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k12681,else__4032__auto__);
} else
{return null;
}
}
}
}
});
ants_cljs.core.ant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4036__auto__,k__4037__auto__,G__12680){var self__ = this;
var this__4036__auto____$1 = this;var pred__12683 = cljs.core.keyword_identical_QMARK_;var expr__12684 = k__4037__auto__;if(cljs.core.truth_(pred__12683.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711),expr__12684)))
{return (new ants_cljs.core.ant(G__12680,self__.id,self__.food,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12683.call(null,new cljs.core.Keyword(null,"id","id",1013907597),expr__12684)))
{return (new ants_cljs.core.ant(self__.dir,G__12680,self__.food,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12683.call(null,new cljs.core.Keyword(null,"food","food",1017053136),expr__12684)))
{return (new ants_cljs.core.ant(self__.dir,self__.id,G__12680,self__.__meta,self__.__extmap,null));
} else
{return (new ants_cljs.core.ant(self__.dir,self__.id,self__.food,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4037__auto__,G__12680),null));
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
ants_cljs.core.ant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4028__auto__,G__12680){var self__ = this;
var this__4028__auto____$1 = this;return (new ants_cljs.core.ant(self__.dir,self__.id,self__.food,G__12680,self__.__extmap,self__.__hash));
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
ants_cljs.core.map__GT_ant = (function map__GT_ant(G__12682){return (new ants_cljs.core.ant(new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(G__12682),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(G__12682),new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(G__12682),null,cljs.core.dissoc.call(null,G__12682,new cljs.core.Keyword(null,"dir","dir",1014003711),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"food","food",1017053136))));
});
/**
* create an ant at the location, returning an ant agent on the location
*/
ants_cljs.core.create_ant = (function create_ant(loc,dir,id){var p = ants_cljs.core.place.call(null,loc);var a = (new ants_cljs.core.ant(dir,id,null));cljs.core.swap_BANG_.call(null,p,cljs.core.assoc,new cljs.core.Keyword(null,"ant","ant",1014000985),a);
ants_cljs.core.logj.call(null,"create-ant",[cljs.core.str("created ant: "),cljs.core.str(a),cljs.core.str(" at "),cljs.core.str(loc)].join(''));
return loc;
});
ants_cljs.core.pprint_map = (function pprint_map(cljs_map){var result = cljs.core.reduce.call(null,(function (lhs,p__12688){var vec__12689 = p__12688;var k = cljs.core.nth.call(null,vec__12689,0,null);var v = cljs.core.nth.call(null,vec__12689,1,null);return [cljs.core.str(lhs),cljs.core.str(" "),cljs.core.str(k),cljs.core.str(" "),cljs.core.str(v)].join('');
}),"",cljs_map);return [cljs.core.str("{"),cljs.core.str(result),cljs.core.str("}")].join('');
});
ants_cljs.core.pprint_vec = (function pprint_vec(cljs_vec){var result = cljs.core.reduce.call(null,(function (lhs,v){return [cljs.core.str(lhs),cljs.core.str(" "),cljs.core.str(v)].join('');
}),"",cljs_vec);return [cljs.core.str("["),cljs.core.str(result),cljs.core.str("]")].join('');
});
ants_cljs.core.pprint = (function pprint(cljs_obj){var type_name = cljs.core.type__GT_str.call(null,cljs.core.type.call(null,cljs_obj));var G__12691 = type_name;if(cljs.core._EQ_.call(null,"cljs.core/PersistentVector",G__12691))
{return ants_cljs.core.pprint_vec.call(null,cljs_obj);
} else
{if(cljs.core._EQ_.call(null,"cljs.core/PersistentArrayMap",G__12691))
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
}),(function (){var iter__4160__auto__ = (function iter__12698(s__12699){return (new cljs.core.LazySeq(null,(function (){var s__12699__$1 = s__12699;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12699__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var y = cljs.core.first.call(null,xs__4579__auto__);var iterys__4156__auto__ = ((function (s__12699__$1,y,xs__4579__auto__,temp__4092__auto__){
return (function iter__12700(s__12701){return (new cljs.core.LazySeq(null,((function (s__12699__$1,y,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__12701__$1 = s__12701;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__12701__$1);if(temp__4092__auto____$1)
{var s__12701__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__12701__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__12701__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__12703 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__12702 = 0;while(true){
if((i__12702 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__12702);cljs.core.chunk_append.call(null,b__12703,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
{
var G__12704 = (i__12702 + 1);
i__12702 = G__12704;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12703),iter__12700.call(null,cljs.core.chunk_rest.call(null,s__12701__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12703),null);
}
} else
{var x = cljs.core.first.call(null,s__12701__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),iter__12700.call(null,cljs.core.rest.call(null,s__12701__$2)));
}
} else
{return null;
}
break;
}
});})(s__12699__$1,y,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__12699__$1,y,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,cljs.core.range.call(null,ants_cljs.core.dim)));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__12698.call(null,cljs.core.rest.call(null,s__12699__$1)));
} else
{{
var G__12705 = cljs.core.rest.call(null,s__12699__$1);
s__12699__$1 = G__12705;
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
ants_cljs.core.setup = (function setup(){var n__4291__auto___12718 = ants_cljs.core.food_places;var i_12719 = 0;while(true){
if((i_12719 < n__4291__auto___12718))
{var p_12720 = ants_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,ants_cljs.core.dim),cljs.core.rand_int.call(null,ants_cljs.core.dim)], null));cljs.core.swap_BANG_.call(null,p_12720,cljs.core.assoc,new cljs.core.Keyword(null,"food","food",1017053136),cljs.core.rand_int.call(null,ants_cljs.core.food_range));
{
var G__12721 = (i_12719 + 1);
i_12719 = G__12721;
continue;
}
} else
{}
break;
}
return cljs.core.doall.call(null,(function (){var iter__4160__auto__ = (function iter__12712(s__12713){return (new cljs.core.LazySeq(null,(function (){var s__12713__$1 = s__12713;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12713__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__4156__auto__ = ((function (s__12713__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__12714(s__12715){return (new cljs.core.LazySeq(null,((function (s__12713__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__12715__$1 = s__12715;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__12715__$1);if(temp__4092__auto____$1)
{var s__12715__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__12715__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__12715__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__12717 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__12716 = 0;while(true){
if((i__12716 < size__4159__auto__))
{var y = cljs.core._nth.call(null,c__4158__auto__,i__12716);cljs.core.chunk_append.call(null,b__12717,(function (){cljs.core.swap_BANG_.call(null,ants_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),cljs.core.assoc,new cljs.core.Keyword(null,"home","home",1017112657),true);
ants_cljs.core.logj.call(null,"setup","setup - creating ant at ",x,y);
ants_cljs.core.create_ant.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.rand_int.call(null,8),[cljs.core.str(x),cljs.core.str("-"),cljs.core.str(y)].join(''));
return ants_cljs.core.logj.call(null,"setup",ants_cljs.core.get_ant_coords.call(null));
})());
{
var G__12722 = (i__12716 + 1);
i__12716 = G__12722;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12717),iter__12714.call(null,cljs.core.chunk_rest.call(null,s__12715__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12717),null);
}
} else
{var y = cljs.core.first.call(null,s__12715__$2);return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,ants_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),cljs.core.assoc,new cljs.core.Keyword(null,"home","home",1017112657),true);
ants_cljs.core.logj.call(null,"setup","setup - creating ant at ",x,y);
ants_cljs.core.create_ant.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.rand_int.call(null,8),[cljs.core.str(x),cljs.core.str("-"),cljs.core.str(y)].join(''));
return ants_cljs.core.logj.call(null,"setup",ants_cljs.core.get_ant_coords.call(null));
})(),iter__12714.call(null,cljs.core.rest.call(null,s__12715__$2)));
}
} else
{return null;
}
break;
}
});})(s__12713__$1,x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__12713__$1,x,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,ants_cljs.core.home_range));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__12712.call(null,cljs.core.rest.call(null,s__12713__$1)));
} else
{{
var G__12723 = cljs.core.rest.call(null,s__12713__$1);
s__12713__$1 = G__12723;
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
var G__12724 = (i + 1);
var G__12725 = (slices.call(null,i) + sum);
i = G__12724;
sum = G__12725;
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
ants_cljs.core.delta_loc = (function delta_loc(p__12726,dir){var vec__12729 = p__12726;var x = cljs.core.nth.call(null,vec__12729,0,null);var y = cljs.core.nth.call(null,vec__12729,1,null);var vec__12730 = ants_cljs.core.dir_delta.call(null,ants_cljs.core.bound.call(null,8,dir));var dx = cljs.core.nth.call(null,vec__12730,0,null);var dy = cljs.core.nth.call(null,vec__12730,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ants_cljs.core.bound.call(null,ants_cljs.core.dim,(x + dx)),ants_cljs.core.bound.call(null,ants_cljs.core.dim,(y + dy))], null);
});
/**
* turns the ant at the location by the given amount
*/
ants_cljs.core.turn = (function turn(loc,amt){var p_12731 = ants_cljs.core.place.call(null,loc);var ant_12732 = new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p_12731));ants_cljs.core.logj.call(null,"turn","ant: ",ant_12732);
if((ant_12732 == null))
{ants_cljs.core.logj.call(null,"turn","error: no ant at this location");
throw (new Error("turn - no ant at this location"));
ants_cljs.core.do_pause.call(null);
} else
{}
ants_cljs.core.logj.call(null,"turn","location before turn: ",p_12731);
cljs.core.swap_BANG_.call(null,p_12731,cljs.core.assoc,new cljs.core.Keyword(null,"ant","ant",1014000985),cljs.core.assoc.call(null,ant_12732,new cljs.core.Keyword(null,"dir","dir",1014003711),ants_cljs.core.bound.call(null,8,(new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(ant_12732) + amt))));
ants_cljs.core.logj.call(null,"turn","location after turn: ",p_12731);
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
{var ranks = cljs.core.merge_with.call(null,cljs.core._PLUS_,ants_cljs.core.rank_by.call(null,cljs.core.comp.call(null,(function (p1__12733_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"home","home",1017112657).cljs$core$IFn$_invoke$arity$1(p1__12733_SHARP_)))
{return 1;
} else
{return 0;
}
}),cljs.core.deref),places),ants_cljs.core.rank_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"pher","pher",1017344023),cljs.core.deref),places));new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__12734_SHARP_){return ants_cljs.core.turn.call(null,p1__12734_SHARP_,0);
}),(function (p1__12735_SHARP_){return ants_cljs.core.turn.call(null,p1__12735_SHARP_,-1);
}),(function (p1__12736_SHARP_){return ants_cljs.core.turn.call(null,p1__12736_SHARP_,1);
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
{var ranks = cljs.core.merge_with.call(null,cljs.core._PLUS_,ants_cljs.core.rank_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"food","food",1017053136),cljs.core.deref),places),ants_cljs.core.rank_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"pher","pher",1017344023),cljs.core.deref),places));ants_cljs.core.move_vec = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ants_cljs.core.move,(function (p1__12737_SHARP_){return ants_cljs.core.turn.call(null,p1__12737_SHARP_,-1);
}),(function (p1__12738_SHARP_){return ants_cljs.core.turn.call(null,p1__12738_SHARP_,1);
})], null);
ants_cljs.core.wrand_func = ants_cljs.core.wrand.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ahead)))?0:ranks.call(null,ahead)),ranks.call(null,ahead_left),ranks.call(null,ahead_right)], null));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__12739_SHARP_){return ants_cljs.core.turn.call(null,p1__12739_SHARP_,0);
}),(function (p1__12740_SHARP_){return ants_cljs.core.turn.call(null,p1__12740_SHARP_,-1);
}),(function (p1__12741_SHARP_){return ants_cljs.core.turn.call(null,p1__12741_SHARP_,1);
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
ants_cljs.core.evaporate = (function evaporate(){var c__6173__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6174__auto__ = (function (){var switch__6158__auto__ = (function (state_12805){var state_val_12806 = (state_12805[1]);if((state_val_12806 === 7))
{var inst_12797 = (state_12805[2]);var state_12805__$1 = (function (){var statearr_12807 = state_12805;(statearr_12807[7] = inst_12797);
return statearr_12807;
})();var statearr_12808_12822 = state_12805__$1;(statearr_12808_12822[2] = null);
(statearr_12808_12822[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 6))
{var inst_12801 = (state_12805[2]);var state_12805__$1 = state_12805;var statearr_12809_12823 = state_12805__$1;(statearr_12809_12823[2] = inst_12801);
(statearr_12809_12823[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 5))
{var state_12805__$1 = state_12805;var statearr_12810_12824 = state_12805__$1;(statearr_12810_12824[2] = null);
(statearr_12810_12824[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 4))
{var inst_12790 = (function (){return ((function (state_val_12806){
return (function iter__12784(s__12785){return (new cljs.core.LazySeq(null,((function (state_val_12806){
return (function (){var s__12785__$1 = s__12785;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12785__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__4156__auto__ = ((function (s__12785__$1,x,xs__4579__auto__,temp__4092__auto__,state_val_12806){
return (function iter__12786(s__12787){return (new cljs.core.LazySeq(null,((function (s__12785__$1,x,xs__4579__auto__,temp__4092__auto__,state_val_12806){
return (function (){var s__12787__$1 = s__12787;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__12787__$1);if(temp__4092__auto____$1)
{var s__12787__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__12787__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__12787__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__12789 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__12788 = 0;while(true){
if((i__12788 < size__4159__auto__))
{var y = cljs.core._nth.call(null,c__4158__auto__,i__12788);cljs.core.chunk_append.call(null,b__12789,(function (){var p = ants_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));return cljs.core.swap_BANG_.call(null,p,cljs.core.assoc,new cljs.core.Keyword(null,"pher","pher",1017344023),(ants_cljs.core.evap_rate * new cljs.core.Keyword(null,"pher","pher",1017344023).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p))));
})());
{
var G__12825 = (i__12788 + 1);
i__12788 = G__12825;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12789),iter__12786.call(null,cljs.core.chunk_rest.call(null,s__12787__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12789),null);
}
} else
{var y = cljs.core.first.call(null,s__12787__$2);return cljs.core.cons.call(null,(function (){var p = ants_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));return cljs.core.swap_BANG_.call(null,p,cljs.core.assoc,new cljs.core.Keyword(null,"pher","pher",1017344023),(ants_cljs.core.evap_rate * new cljs.core.Keyword(null,"pher","pher",1017344023).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p))));
})(),iter__12786.call(null,cljs.core.rest.call(null,s__12787__$2)));
}
} else
{return null;
}
break;
}
});})(s__12785__$1,x,xs__4579__auto__,temp__4092__auto__,state_val_12806))
,null,null));
});})(s__12785__$1,x,xs__4579__auto__,temp__4092__auto__,state_val_12806))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,cljs.core.range.call(null,ants_cljs.core.dim)));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__12784.call(null,cljs.core.rest.call(null,s__12785__$1)));
} else
{{
var G__12826 = cljs.core.rest.call(null,s__12785__$1);
s__12785__$1 = G__12826;
continue;
}
}
} else
{return null;
}
break;
}
});})(state_val_12806))
,null,null));
});
;})(state_val_12806))
})();var inst_12791 = cljs.core.range.call(null,ants_cljs.core.dim);var inst_12792 = inst_12790.call(null,inst_12791);var inst_12793 = cljs.core.dorun.call(null,inst_12792);var inst_12794 = cljs.core.rand_int.call(null,1000);var inst_12795 = cljs.core.async.timeout.call(null,inst_12794);var state_12805__$1 = (function (){var statearr_12811 = state_12805;(statearr_12811[8] = inst_12793);
return statearr_12811;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12805__$1,7,inst_12795);
} else
{if((state_val_12806 === 3))
{var inst_12803 = (state_12805[2]);var state_12805__$1 = state_12805;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12805__$1,inst_12803);
} else
{if((state_val_12806 === 2))
{var state_12805__$1 = state_12805;if(true)
{var statearr_12812_12827 = state_12805__$1;(statearr_12812_12827[1] = 4);
} else
{var statearr_12813_12828 = state_12805__$1;(statearr_12813_12828[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 1))
{var state_12805__$1 = state_12805;var statearr_12814_12829 = state_12805__$1;(statearr_12814_12829[2] = null);
(statearr_12814_12829[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__6158__auto__){
return (function() {
var state_machine__6159__auto__ = null;
var state_machine__6159__auto____0 = (function (){var statearr_12818 = [null,null,null,null,null,null,null,null,null];(statearr_12818[0] = state_machine__6159__auto__);
(statearr_12818[1] = 1);
return statearr_12818;
});
var state_machine__6159__auto____1 = (function (state_12805){while(true){
var ret_value__6160__auto__ = (function (){try{while(true){
var result__6161__auto__ = switch__6158__auto__.call(null,state_12805);if(cljs.core.keyword_identical_QMARK_.call(null,result__6161__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6161__auto__;
}
break;
}
}catch (e12819){if((e12819 instanceof Object))
{var ex__6162__auto__ = e12819;var statearr_12820_12830 = state_12805;(statearr_12820_12830[5] = ex__6162__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12805);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12819;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6160__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12831 = state_12805;
state_12805 = G__12831;
continue;
}
} else
{return ret_value__6160__auto__;
}
break;
}
});
state_machine__6159__auto__ = function(state_12805){
switch(arguments.length){
case 0:
return state_machine__6159__auto____0.call(this);
case 1:
return state_machine__6159__auto____1.call(this,state_12805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6159__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6159__auto____0;
state_machine__6159__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6159__auto____1;
return state_machine__6159__auto__;
})()
;})(switch__6158__auto__))
})();var state__6175__auto__ = (function (){var statearr_12821 = f__6174__auto__.call(null);(statearr_12821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6173__auto__);
return statearr_12821;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6175__auto__);
}));
return c__6173__auto__;
});
ants_cljs.core.scale = 5;
ants_cljs.core.fill_cell = (function fill_cell(ctx,x,y,colour){var G__12833_12834 = ctx;G__12833_12834.beginPath();
G__12833_12834.rect((x * ants_cljs.core.scale),(y * ants_cljs.core.scale),ants_cljs.core.scale,ants_cljs.core.scale);
ctx.fillStyle = colour;
return ctx.fill();
});
ants_cljs.core.render_ant = (function render_ant(ant,ctx,x,y){var vec__12837 = new cljs.core.PersistentArrayMap(null, 8, [0,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,0,2,4], null),1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [4,0,0,4], null),2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [4,2,0,2], null),3,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [4,4,0,0], null),4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,4,2,0], null),5,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,4,4,0], null),6,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,2,4,2], null),7,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,4,4], null)], null).call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(ant));var hx = cljs.core.nth.call(null,vec__12837,0,null);var hy = cljs.core.nth.call(null,vec__12837,1,null);var tx = cljs.core.nth.call(null,vec__12837,2,null);var ty = cljs.core.nth.call(null,vec__12837,3,null);ctx.beginPath();
if((!((new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(ant) == null))) && (!(cljs.core._EQ_.call(null,0,new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(ant)))))
{ctx.strokeStyle = "#ff0000";
ants_cljs.core.logj.call(null,"render-ant","drawing red");
} else
{ctx.strokeStyle = "black";
}
var G__12838 = ctx;G__12838.moveTo((hx + (x * ants_cljs.core.scale)),(hy + (y * ants_cljs.core.scale)));
G__12838.lineTo((tx + (x * ants_cljs.core.scale)),(ty + (y * ants_cljs.core.scale)));
G__12838.stroke();
return G__12838;
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
var G__12840_12841 = ctx;G__12840_12841.beginPath();
G__12840_12841.rect(1,1,(ants_cljs.core.dim * ants_cljs.core.scale),(ants_cljs.core.dim * ants_cljs.core.scale));
ctx.fillStyle = "white";
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = "black";
return ctx.stroke();
});
ants_cljs.core.draw_outside_box = (function draw_outside_box(ctx){var G__12843_12844 = ctx;G__12843_12844.beginPath();
G__12843_12844.rect(1,1,(ants_cljs.core.dim * ants_cljs.core.scale),(ants_cljs.core.dim * ants_cljs.core.scale));
ctx.lineWidth = 1;
ctx.strokeStyle = "black";
return ctx.stroke();
});
ants_cljs.core.draw_home_box = (function draw_home_box(ctx){var G__12846_12847 = ctx;G__12846_12847.beginPath();
G__12846_12847.rect((ants_cljs.core.scale * ants_cljs.core.home_off),(ants_cljs.core.scale * ants_cljs.core.home_off),(ants_cljs.core.scale * ants_cljs.core.nants_sqrt),(ants_cljs.core.scale * ants_cljs.core.nants_sqrt));
ctx.lineWidth = 1;
ctx.strokeStyle = "blue";
return ctx.stroke();
});
ants_cljs.core.render = (function render(ctx){var c__6173__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6174__auto__ = (function (){var switch__6158__auto__ = (function (state_12948){var state_val_12949 = (state_12948[1]);if((state_val_12949 === 1))
{var state_12948__$1 = state_12948;var statearr_12950_12970 = state_12948__$1;(statearr_12950_12970[2] = null);
(statearr_12950_12970[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12949 === 2))
{var state_12948__$1 = state_12948;if(true)
{var statearr_12951_12971 = state_12948__$1;(statearr_12951_12971[1] = 4);
} else
{var statearr_12952_12972 = state_12948__$1;(statearr_12952_12972[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12949 === 3))
{var inst_12946 = (state_12948[2]);var state_12948__$1 = state_12948;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12948__$1,inst_12946);
} else
{if((state_val_12949 === 4))
{var state_12948__$1 = state_12948;if(cljs.core.truth_(ants_cljs.core.is_running))
{var statearr_12953_12973 = state_12948__$1;(statearr_12953_12973[1] = 7);
} else
{var statearr_12954_12974 = state_12948__$1;(statearr_12954_12974[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12949 === 5))
{var state_12948__$1 = state_12948;var statearr_12955_12975 = state_12948__$1;(statearr_12955_12975[2] = null);
(statearr_12955_12975[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12949 === 6))
{var inst_12944 = (state_12948[2]);var state_12948__$1 = state_12948;var statearr_12956_12976 = state_12948__$1;(statearr_12956_12976[2] = inst_12944);
(statearr_12956_12976[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12949 === 7))
{var inst_12918 = (function (){return ((function (state_val_12949){
return (function iter__12912(s__12913){return (new cljs.core.LazySeq(null,((function (state_val_12949){
return (function (){var s__12913__$1 = s__12913;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12913__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__4156__auto__ = ((function (s__12913__$1,x,xs__4579__auto__,temp__4092__auto__,state_val_12949){
return (function iter__12914(s__12915){return (new cljs.core.LazySeq(null,((function (s__12913__$1,x,xs__4579__auto__,temp__4092__auto__,state_val_12949){
return (function (){var s__12915__$1 = s__12915;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__12915__$1);if(temp__4092__auto____$1)
{var s__12915__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__12915__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__12915__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__12917 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__12916 = 0;while(true){
if((i__12916 < size__4159__auto__))
{var y = cljs.core._nth.call(null,c__4158__auto__,i__12916);cljs.core.chunk_append.call(null,b__12917,cljs.core.deref.call(null,ants_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))));
{
var G__12977 = (i__12916 + 1);
i__12916 = G__12977;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12917),iter__12914.call(null,cljs.core.chunk_rest.call(null,s__12915__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12917),null);
}
} else
{var y = cljs.core.first.call(null,s__12915__$2);return cljs.core.cons.call(null,cljs.core.deref.call(null,ants_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))),iter__12914.call(null,cljs.core.rest.call(null,s__12915__$2)));
}
} else
{return null;
}
break;
}
});})(s__12913__$1,x,xs__4579__auto__,temp__4092__auto__,state_val_12949))
,null,null));
});})(s__12913__$1,x,xs__4579__auto__,temp__4092__auto__,state_val_12949))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,cljs.core.range.call(null,ants_cljs.core.dim)));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__12912.call(null,cljs.core.rest.call(null,s__12913__$1)));
} else
{{
var G__12978 = cljs.core.rest.call(null,s__12913__$1);
s__12913__$1 = G__12978;
continue;
}
}
} else
{return null;
}
break;
}
});})(state_val_12949))
,null,null));
});
;})(state_val_12949))
})();var inst_12919 = cljs.core.range.call(null,ants_cljs.core.dim);var inst_12920 = inst_12918.call(null,inst_12919);var inst_12921 = cljs.core.apply.call(null,cljs.core.vector,inst_12920);var inst_12922 = ants_cljs.core.setup_context.call(null,ctx);var inst_12929 = (function (){var v = inst_12921;return ((function (v,inst_12918,inst_12919,inst_12920,inst_12921,inst_12922,state_val_12949){
return (function iter__12923(s__12924){return (new cljs.core.LazySeq(null,((function (v,inst_12918,inst_12919,inst_12920,inst_12921,inst_12922,state_val_12949){
return (function (){var s__12924__$1 = s__12924;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12924__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__4156__auto__ = ((function (s__12924__$1,x,xs__4579__auto__,temp__4092__auto__,v,inst_12918,inst_12919,inst_12920,inst_12921,inst_12922,state_val_12949){
return (function iter__12925(s__12926){return (new cljs.core.LazySeq(null,((function (s__12924__$1,x,xs__4579__auto__,temp__4092__auto__,v,inst_12918,inst_12919,inst_12920,inst_12921,inst_12922,state_val_12949){
return (function (){var s__12926__$1 = s__12926;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__12926__$1);if(temp__4092__auto____$1)
{var s__12926__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__12926__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__12926__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__12928 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__12927 = 0;while(true){
if((i__12927 < size__4159__auto__))
{var y = cljs.core._nth.call(null,c__4158__auto__,i__12927);cljs.core.chunk_append.call(null,b__12928,ants_cljs.core.render_place.call(null,ctx,v.call(null,((x * ants_cljs.core.dim) + y)),x,y));
{
var G__12979 = (i__12927 + 1);
i__12927 = G__12979;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12928),iter__12925.call(null,cljs.core.chunk_rest.call(null,s__12926__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12928),null);
}
} else
{var y = cljs.core.first.call(null,s__12926__$2);return cljs.core.cons.call(null,ants_cljs.core.render_place.call(null,ctx,v.call(null,((x * ants_cljs.core.dim) + y)),x,y),iter__12925.call(null,cljs.core.rest.call(null,s__12926__$2)));
}
} else
{return null;
}
break;
}
});})(s__12924__$1,x,xs__4579__auto__,temp__4092__auto__,v,inst_12918,inst_12919,inst_12920,inst_12921,inst_12922,state_val_12949))
,null,null));
});})(s__12924__$1,x,xs__4579__auto__,temp__4092__auto__,v,inst_12918,inst_12919,inst_12920,inst_12921,inst_12922,state_val_12949))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,cljs.core.range.call(null,ants_cljs.core.dim)));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__12923.call(null,cljs.core.rest.call(null,s__12924__$1)));
} else
{{
var G__12980 = cljs.core.rest.call(null,s__12924__$1);
s__12924__$1 = G__12980;
continue;
}
}
} else
{return null;
}
break;
}
});})(v,inst_12918,inst_12919,inst_12920,inst_12921,inst_12922,state_val_12949))
,null,null));
});
;})(v,inst_12918,inst_12919,inst_12920,inst_12921,inst_12922,state_val_12949))
})();var inst_12930 = cljs.core.range.call(null,ants_cljs.core.dim);var inst_12931 = inst_12929.call(null,inst_12930);var inst_12932 = cljs.core.dorun.call(null,inst_12931);var inst_12933 = ants_cljs.core.draw_outside_box.call(null,ctx);var inst_12934 = ants_cljs.core.draw_home_box.call(null,ctx);var state_12948__$1 = (function (){var statearr_12957 = state_12948;(statearr_12957[7] = inst_12932);
(statearr_12957[8] = inst_12933);
(statearr_12957[9] = inst_12922);
return statearr_12957;
})();var statearr_12958_12981 = state_12948__$1;(statearr_12958_12981[2] = inst_12934);
(statearr_12958_12981[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12949 === 8))
{var state_12948__$1 = state_12948;var statearr_12959_12982 = state_12948__$1;(statearr_12959_12982[2] = null);
(statearr_12959_12982[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12949 === 9))
{var inst_12937 = (state_12948[2]);var inst_12938 = cljs.core.async.timeout.call(null,100);var state_12948__$1 = (function (){var statearr_12960 = state_12948;(statearr_12960[10] = inst_12937);
return statearr_12960;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12948__$1,10,inst_12938);
} else
{if((state_val_12949 === 10))
{var inst_12940 = (state_12948[2]);var state_12948__$1 = (function (){var statearr_12961 = state_12948;(statearr_12961[11] = inst_12940);
return statearr_12961;
})();var statearr_12962_12983 = state_12948__$1;(statearr_12962_12983[2] = null);
(statearr_12962_12983[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6158__auto__){
return (function() {
var state_machine__6159__auto__ = null;
var state_machine__6159__auto____0 = (function (){var statearr_12966 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12966[0] = state_machine__6159__auto__);
(statearr_12966[1] = 1);
return statearr_12966;
});
var state_machine__6159__auto____1 = (function (state_12948){while(true){
var ret_value__6160__auto__ = (function (){try{while(true){
var result__6161__auto__ = switch__6158__auto__.call(null,state_12948);if(cljs.core.keyword_identical_QMARK_.call(null,result__6161__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6161__auto__;
}
break;
}
}catch (e12967){if((e12967 instanceof Object))
{var ex__6162__auto__ = e12967;var statearr_12968_12984 = state_12948;(statearr_12968_12984[5] = ex__6162__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12948);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12967;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6160__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12985 = state_12948;
state_12948 = G__12985;
continue;
}
} else
{return ret_value__6160__auto__;
}
break;
}
});
state_machine__6159__auto__ = function(state_12948){
switch(arguments.length){
case 0:
return state_machine__6159__auto____0.call(this);
case 1:
return state_machine__6159__auto____1.call(this,state_12948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6159__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6159__auto____0;
state_machine__6159__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6159__auto____1;
return state_machine__6159__auto__;
})()
;})(switch__6158__auto__))
})();var state__6175__auto__ = (function (){var statearr_12969 = f__6174__auto__.call(null);(statearr_12969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6173__auto__);
return statearr_12969;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6175__auto__);
}));
return c__6173__auto__;
});
/**
* Don't tell anyone this is actually just document.getElementById().
*/
ants_cljs.core.get_canvas = (function get_canvas(id){return document.getElementById(id);
});
ants_cljs.core.canvs = ants_cljs.core.get_canvas.call(null,"antcanvas");
ants_cljs.core.context = ants_cljs.core.canvs.getContext("2d");
ants_cljs.core.map_coords = (function map_coords(){var iter__4160__auto__ = (function iter__12992(s__12993){return (new cljs.core.LazySeq(null,(function (){var s__12993__$1 = s__12993;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12993__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var y = cljs.core.first.call(null,xs__4579__auto__);var iterys__4156__auto__ = ((function (s__12993__$1,y,xs__4579__auto__,temp__4092__auto__){
return (function iter__12994(s__12995){return (new cljs.core.LazySeq(null,((function (s__12993__$1,y,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__12995__$1 = s__12995;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__12995__$1);if(temp__4092__auto____$1)
{var s__12995__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__12995__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__12995__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__12997 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__12996 = 0;while(true){
if((i__12996 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__12996);cljs.core.chunk_append.call(null,b__12997,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
{
var G__12998 = (i__12996 + 1);
i__12996 = G__12998;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12997),iter__12994.call(null,cljs.core.chunk_rest.call(null,s__12995__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12997),null);
}
} else
{var x = cljs.core.first.call(null,s__12995__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),iter__12994.call(null,cljs.core.rest.call(null,s__12995__$2)));
}
} else
{return null;
}
break;
}
});})(s__12993__$1,y,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__12993__$1,y,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,cljs.core.range.call(null,ants_cljs.core.dim)));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__12992.call(null,cljs.core.rest.call(null,s__12993__$1)));
} else
{{
var G__12999 = cljs.core.rest.call(null,s__12993__$1);
s__12993__$1 = G__12999;
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
ants_cljs.core.behave_ants = (function behave_ants(){var c__6173__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6174__auto__ = (function (){var switch__6158__auto__ = (function (state_13080){var state_val_13081 = (state_13080[1]);if((state_val_13081 === 1))
{var state_13080__$1 = state_13080;var statearr_13082_13102 = state_13080__$1;(statearr_13082_13102[2] = null);
(statearr_13082_13102[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13081 === 2))
{var state_13080__$1 = state_13080;if(true)
{var statearr_13083_13103 = state_13080__$1;(statearr_13083_13103[1] = 4);
} else
{var statearr_13084_13104 = state_13080__$1;(statearr_13084_13104[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13081 === 3))
{var inst_13078 = (state_13080[2]);var state_13080__$1 = state_13080;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13080__$1,inst_13078);
} else
{if((state_val_13081 === 4))
{var state_13080__$1 = state_13080;if(cljs.core.truth_(ants_cljs.core.is_running))
{var statearr_13085_13105 = state_13080__$1;(statearr_13085_13105[1] = 7);
} else
{var statearr_13086_13106 = state_13080__$1;(statearr_13086_13106[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13081 === 5))
{var state_13080__$1 = state_13080;var statearr_13087_13107 = state_13080__$1;(statearr_13087_13107[2] = null);
(statearr_13087_13107[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13081 === 6))
{var inst_13076 = (state_13080[2]);var state_13080__$1 = state_13080;var statearr_13088_13108 = state_13080__$1;(statearr_13088_13108[2] = inst_13076);
(statearr_13088_13108[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13081 === 7))
{var inst_13054 = ants_cljs.core.get_ant_coords.call(null);var inst_13055 = [cljs.core.str("get-ants-coords: "),cljs.core.str(inst_13054)].join('');var inst_13056 = ants_cljs.core.logj.call(null,"move",inst_13055);var inst_13057 = ants_cljs.core.get_ant_food_count.call(null);var inst_13058 = [cljs.core.str("get-ant-food-count "),cljs.core.str(inst_13057)].join('');var inst_13059 = ants_cljs.core.logj.call(null,"count",inst_13058);var inst_13064 = (function (){var ant_coords = inst_13054;return ((function (ant_coords,inst_13054,inst_13055,inst_13056,inst_13057,inst_13058,inst_13059,state_val_13081){
return (function iter__13060(s__13061){return (new cljs.core.LazySeq(null,((function (ant_coords,inst_13054,inst_13055,inst_13056,inst_13057,inst_13058,inst_13059,state_val_13081){
return (function (){var s__13061__$1 = s__13061;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13061__$1);if(temp__4092__auto__)
{var s__13061__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13061__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__13061__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__13063 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__13062 = 0;while(true){
if((i__13062 < size__4159__auto__))
{var coord = cljs.core._nth.call(null,c__4158__auto__,i__13062);cljs.core.chunk_append.call(null,b__13063,(function (){var p_13109 = ants_cljs.core.place.call(null,coord);var ant_13110 = new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p_13109));if((p_13109 == null))
{ants_cljs.core.logj.call(null,"behave-ants","nil p in behave-ants");
throw (new Error("behave-ants - no p at this location"));
ants_cljs.core.do_pause.call(null);
} else
{}
if((ant_13110 == null))
{ants_cljs.core.logj.call(null,"behave-ants","nil ant in behave-ants");
throw (new Error("behave-ants - no ant at this location"));
ants_cljs.core.do_pause.call(null);
} else
{}
return ants_cljs.core.behave.call(null,coord);
})());
{
var G__13111 = (i__13062 + 1);
i__13062 = G__13111;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13063),iter__13060.call(null,cljs.core.chunk_rest.call(null,s__13061__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13063),null);
}
} else
{var coord = cljs.core.first.call(null,s__13061__$2);return cljs.core.cons.call(null,(function (){var p_13112 = ants_cljs.core.place.call(null,coord);var ant_13113 = new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p_13112));if((p_13112 == null))
{ants_cljs.core.logj.call(null,"behave-ants","nil p in behave-ants");
throw (new Error("behave-ants - no p at this location"));
ants_cljs.core.do_pause.call(null);
} else
{}
if((ant_13113 == null))
{ants_cljs.core.logj.call(null,"behave-ants","nil ant in behave-ants");
throw (new Error("behave-ants - no ant at this location"));
ants_cljs.core.do_pause.call(null);
} else
{}
return ants_cljs.core.behave.call(null,coord);
})(),iter__13060.call(null,cljs.core.rest.call(null,s__13061__$2)));
}
} else
{return null;
}
break;
}
});})(ant_coords,inst_13054,inst_13055,inst_13056,inst_13057,inst_13058,inst_13059,state_val_13081))
,null,null));
});
;})(ant_coords,inst_13054,inst_13055,inst_13056,inst_13057,inst_13058,inst_13059,state_val_13081))
})();var inst_13065 = inst_13064.call(null,inst_13054);var inst_13066 = cljs.core.dorun.call(null,inst_13065);var state_13080__$1 = (function (){var statearr_13089 = state_13080;(statearr_13089[7] = inst_13056);
(statearr_13089[8] = inst_13059);
return statearr_13089;
})();var statearr_13090_13114 = state_13080__$1;(statearr_13090_13114[2] = inst_13066);
(statearr_13090_13114[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13081 === 8))
{var state_13080__$1 = state_13080;var statearr_13091_13115 = state_13080__$1;(statearr_13091_13115[2] = null);
(statearr_13091_13115[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13081 === 9))
{var inst_13069 = (state_13080[2]);var inst_13070 = cljs.core.async.timeout.call(null,500);var state_13080__$1 = (function (){var statearr_13092 = state_13080;(statearr_13092[9] = inst_13069);
return statearr_13092;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13080__$1,10,inst_13070);
} else
{if((state_val_13081 === 10))
{var inst_13072 = (state_13080[2]);var state_13080__$1 = (function (){var statearr_13093 = state_13080;(statearr_13093[10] = inst_13072);
return statearr_13093;
})();var statearr_13094_13116 = state_13080__$1;(statearr_13094_13116[2] = null);
(statearr_13094_13116[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6158__auto__){
return (function() {
var state_machine__6159__auto__ = null;
var state_machine__6159__auto____0 = (function (){var statearr_13098 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13098[0] = state_machine__6159__auto__);
(statearr_13098[1] = 1);
return statearr_13098;
});
var state_machine__6159__auto____1 = (function (state_13080){while(true){
var ret_value__6160__auto__ = (function (){try{while(true){
var result__6161__auto__ = switch__6158__auto__.call(null,state_13080);if(cljs.core.keyword_identical_QMARK_.call(null,result__6161__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6161__auto__;
}
break;
}
}catch (e13099){if((e13099 instanceof Object))
{var ex__6162__auto__ = e13099;var statearr_13100_13117 = state_13080;(statearr_13100_13117[5] = ex__6162__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13080);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13099;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6160__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13118 = state_13080;
state_13080 = G__13118;
continue;
}
} else
{return ret_value__6160__auto__;
}
break;
}
});
state_machine__6159__auto__ = function(state_13080){
switch(arguments.length){
case 0:
return state_machine__6159__auto____0.call(this);
case 1:
return state_machine__6159__auto____1.call(this,state_13080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6159__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6159__auto____0;
state_machine__6159__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6159__auto____1;
return state_machine__6159__auto__;
})()
;})(switch__6158__auto__))
})();var state__6175__auto__ = (function (){var statearr_13101 = f__6174__auto__.call(null);(statearr_13101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6173__auto__);
return statearr_13101;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6175__auto__);
}));
return c__6173__auto__;
});
ants_cljs.core.send_off_animation = (function send_off_animation(){return ants_cljs.core.render.call(null,ants_cljs.core.context);
});
ants_cljs.core.run_loop = (function run_loop(){ants_cljs.core.send_off_animation.call(null);
ants_cljs.core.behave_ants.call(null);
return ants_cljs.core.evaporate.call(null);
});
ants_cljs.core.animate = (function animate(){return ants_cljs.core.run_loop.call(null);
});
ants_cljs.core.animate.call(null);
goog.events.listen(goog.dom.getElement("clickMe"),"click",(function (){ants_cljs.core.do_pause.call(null);
return ants_cljs.core.animate.call(null);
}));

//# sourceMappingURL=core.js.map