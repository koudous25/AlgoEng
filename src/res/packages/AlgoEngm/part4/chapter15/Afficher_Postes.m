function Afficher_Postes(l,n)
i=L;
fprintf('Chaine %d , Poste %d',i,n);
for j=n:2
    i=l(i,j);
    fprintf('Chaine %d , Poste %d',i,j-1);
end
    
end

