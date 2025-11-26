# Concepts JavaScript Fondamentaux

Ce document explique les concepts JavaScript essentiels utilisés dans le projet.

## 📚 Table des matières

- [Promises (Promesses)](#promises-promesses)
- [Async/Await](#asyncawait)
- [Callbacks](#callbacks)

---

## Promises (Promesses)

### 🎯 Qu'est-ce qu'une Promise ?

Une **Promise** (promesse) est un objet JavaScript qui représente **le résultat futur** d'une opération asynchrone.

### 📦 L'analogie du colis

Imagine que tu commandes un colis sur internet :

1. **Tu passes commande** → Tu reçois un **numéro de suivi** (c'est la Promise)
2. **Le colis est en route** → La Promise est "en attente" (pending)
3. **Deux issues possibles** :
   - ✅ Le colis arrive → La Promise est "résolue" (fulfilled)
   - ❌ Le colis est perdu → La Promise est "rejetée" (rejected)

Le numéro de suivi **n'est pas le colis**, mais une **promesse** que tu le recevras !

### 💻 En code

```javascript
// Sans Promise (synchrone) - résultat immédiat
const nombre = 5;
console.log(nombre); // Affiche : 5

// Avec Promise (asynchrone) - résultat futur
const promesse = fetchSubjects(); // Retourne une Promise
console.log(promesse); // Affiche : Promise { <pending> } ⚠️

// Pour obtenir le résultat, il faut attendre :
promesse.then(resultat => {
  console.log(resultat); // Affiche : [matières...]
});
```

### 🔄 Les 3 états d'une Promise

```javascript
// 1️⃣ PENDING (en attente)
const promise = fetch('https://api.example.com');
// La requête est lancée mais pas encore terminée

// 2️⃣ FULFILLED (résolue/réussie)
promise.then(data => {
  console.log(data); // ✅ Tu as tes données !
});

// 3️⃣ REJECTED (rejetée/échec)
promise.catch(error => {
  console.error(error); // ❌ Une erreur s'est produite
});
```

### 🎭 Cas concret dans le projet

```typescript
// fetchSubjects() retourne une Promise
const subjects = fetchSubjects();
// ❌ subjects = Promise<Subject[]>
//    Tu ne peux PAS faire subjects.map() car c'est une promesse !

// Solution 1 : avec .then()
fetchSubjects().then(subjects => {
  subjects.map(...) // ✅ Maintenant c'est un tableau !
});

// Solution 2 : avec await (dans une fonction async)
const subjects = await fetchSubjects();
subjects.map(...) // ✅ await "déballé" la promesse !

// Solution 3 : avec useEffect (dans React)
useEffect(() => {
  fetchSubjects().then(setSubjects); // Stocke dans un state
}, []);
```

### 🔑 Points clés

| Concept | Explication |
|---------|-------------|
| **Promise** | Enveloppe qui contient un résultat futur |
| **Valeur réelle** | À l'intérieur de la Promise, pas accessible directement |
| **Déballer** | Il faut utiliser `.then()`, `await`, ou `useEffect` |
| **Pourquoi ?** | Les opérations longues (API, BDD) ne bloquent pas le code |

### 🍕 Métaphore de la pizza

```javascript
// Tu commandes une pizza
const promessePizza = commanderPizza(); // Promise<Pizza>

// Tu ne peux pas manger directement la promesse !
manger(promessePizza); // ❌ "Je ne peux pas manger un reçu !"

// Il faut attendre la livraison
promessePizza.then(pizza => {
  manger(pizza); // ✅ Maintenant tu as la vraie pizza !
});
```

### ⚡ Pourquoi utiliser des Promises ?

**Sans Promise (code bloquant)** :
```javascript
const data = recupererDonnees(); // Bloque 5 secondes ⏱️
console.log("J'attends..."); // Attend que la ligne du dessus finisse
```

**Avec Promise (code non-bloquant)** :
```javascript
recupererDonnees().then(data => { /* traite les données */ });
console.log("Je continue !"); // S'exécute immédiatement ! ⚡
```

### 🎓 Résumé

Une **Promise** est comme un **ticket de caisse** : 
- Ce n'est **pas le produit** lui-même
- C'est la **garantie** que tu l'auras plus tard
- Tu dois **attendre** (`.then()`, `await`) pour obtenir le vrai résultat

### 📝 Création d'une Promise

```javascript
// Créer une Promise manuellement
const maPromesse = new Promise((resolve, reject) => {
  // Opération asynchrone
  setTimeout(() => {
    const success = true;
    
    if (success) {
      resolve("Opération réussie !"); // ✅ Résolution
    } else {
      reject("Erreur !"); // ❌ Rejet
    }
  }, 2000);
});

// Utilisation
maPromesse
  .then(resultat => console.log(resultat))
  .catch(erreur => console.error(erreur))
  .finally(() => console.log("Terminé !"));
```

### 🔗 Chaînage de Promises

```javascript
fetchUser(userId)
  .then(user => fetchOrders(user.id))
  .then(orders => fetchOrderDetails(orders[0].id))
  .then(details => console.log(details))
  .catch(error => console.error("Erreur :", error));
```

---

## Async/Await

### 🎯 Qu'est-ce qu'async/await ?

`async/await` est une **syntaxe moderne** pour travailler avec les Promises de manière plus lisible, comme si c'était du code synchrone.

### 📖 Syntaxe de base

```javascript
// Fonction asynchrone
async function fetchData() {
  const response = await fetch('https://api.example.com');
  const data = await response.json();
  return data;
}

// Équivalent avec .then()
function fetchData() {
  return fetch('https://api.example.com')
    .then(response => response.json())
    .then(data => data);
}
```

### 🔄 Avec gestion d'erreur

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur :", error);
    throw error;
  }
}
```

### ⚠️ Règles importantes

1. **`await` ne fonctionne que dans une fonction `async`**
```javascript
// ❌ Erreur
function maFonction() {
  const data = await fetchData(); // SyntaxError !
}

// ✅ Correct
async function maFonction() {
  const data = await fetchData();
}
```

2. **Une fonction `async` retourne toujours une Promise**
```javascript
async function getName() {
  return "John"; // Retourne Promise<string>
}

getName().then(name => console.log(name)); // "John"
```

3. **Dans React, les composants ne peuvent pas être `async`**
```typescript
// ❌ Impossible
async function MyComponent() {
  const data = await fetchData();
  return <div>{data}</div>;
}

// ✅ Utiliser useEffect à la place
function MyComponent() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetchData().then(setData);
  }, []);
  
  return <div>{data}</div>;
}
```

### 🎯 Cas d'usage dans Next.js

#### Server Components (Next.js 13+)
```typescript
// ✅ Les Server Components peuvent être async
export default async function Page() {
  const data = await fetchData();
  return <div>{data}</div>;
}
```

#### Client Components
```typescript
'use client';

// ❌ Ne peut pas être async
export default function Page() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    async function loadData() {
      const result = await fetchData();
      setData(result);
    }
    loadData();
  }, []);
  
  return <div>{data}</div>;
}
```

### 🔀 Exécution en parallèle

```javascript
// ⏱️ Séquentiel (lent) - 6 secondes
const user = await fetchUser();      // 2s
const orders = await fetchOrders();  // 2s
const products = await fetchProducts(); // 2s

// ⚡ Parallèle (rapide) - 2 secondes
const [user, orders, products] = await Promise.all([
  fetchUser(),
  fetchOrders(),
  fetchProducts()
]);
```

---

## Callbacks

### 🎯 Qu'est-ce qu'un callback ?

Un **callback** est une fonction passée en argument à une autre fonction, qui sera exécutée plus tard.

### 💻 Exemple simple

```javascript
// Fonction qui prend un callback
function faireSomething(callback) {
  console.log("Début");
  callback(); // Exécute le callback
  console.log("Fin");
}

// Utilisation
faireSomething(() => {
  console.log("Je suis le callback !");
});

// Affiche :
// Début
// Je suis le callback !
// Fin
```

### 🔄 Callbacks asynchrones

```javascript
// setTimeout utilise un callback
setTimeout(() => {
  console.log("2 secondes plus tard...");
}, 2000);

// Les événements utilisent des callbacks
button.addEventListener('click', () => {
  console.log("Button clicked!");
});

// Les méthodes de tableau utilisent des callbacks
[1, 2, 3].map(n => n * 2); // [2, 4, 6]
```

### 😱 Callback Hell (à éviter)

```javascript
// ❌ Callback Hell - difficile à lire
getData(function(a) {
  getMoreData(a, function(b) {
    getMoreData(b, function(c) {
      getMoreData(c, function(d) {
        console.log(d);
      });
    });
  });
});

// ✅ Avec Promises - beaucoup plus lisible
getData()
  .then(a => getMoreData(a))
  .then(b => getMoreData(b))
  .then(c => getMoreData(c))
  .then(d => console.log(d));

// ✅ Avec async/await - encore mieux !
const a = await getData();
const b = await getMoreData(a);
const c = await getMoreData(b);
const d = await getMoreData(c);
console.log(d);
```

---

## 🔗 Ressources

- [MDN - Promises](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN - Async/Await](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/async_function)
- [JavaScript.info - Async/Await](https://javascript.info/async-await)
- [Next.js - Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching)

---

**Note** : Ces concepts sont fondamentaux en JavaScript moderne et essentiels pour comprendre le fonctionnement de Next.js et React.
