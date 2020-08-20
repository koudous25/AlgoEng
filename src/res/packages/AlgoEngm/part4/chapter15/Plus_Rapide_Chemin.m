function Plus_Rapide_Chemin(a,t,e,x,n)
% j poste  1 � n
% i chaine 1 ou 2
%a(i,j) Le temps de montage au poste Si,j
%ei  temps d�arriv�e pour le ch�ssis qui entre sur la cha�ne i
%xi  temps de sortie pour l�auto achev�e qui sort de la cha�ne i
%ti,j (i = 1, 2) (j = 1, 2, . . . , n ? 1) temps pour passer sur l�autre cha�ne apr�s le poste Si,j

%Le probl�me consiste � d�terminer quels sont les postes � s�lectionner sur la cha�ne 1 et sur la
%cha�ne 2 pour minimiser le d�lai de transit d�une auto � travers l�atelier.
f(1,1)=e(1)+a(1,1);
f(2,1)=e(2)+a(2,1);
for j=2:n
    if (f(1,j-1) + a(1,j))<= (f(2,j-1) + t(2,j-1) + a(1,j))
        f(1,j)=f(1,j-1)+a(1,j);
        l(1,j)=1;
    else
        f(1,j)=f(2,j-1)+t(2,j-1) + a(1,j);
        l(1,j)=2;
    end
    
    if (f(2,j-1) + a(2,j))<= (f(1,j-1) + t(1,j-1) + a(2,j))
        f(2,j)=f(2,j-1)+a(2,j);
        l(2,j)=2;
    else
        f(2,j)=f(1,j-1)+t(1,j-1) + a(2,j);
        l(2,j)=1;
    end
end
if ( f(1,n) + x(1) ) <= ( f(2,n) + x(2) )
    F=f(1,n) + x(1);
    L=1;
else
    F=f(2,n) + x(2);
    L=2;
end
end

